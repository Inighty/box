<?php
#注册插件
RegisterPlugin("viewall","ActivePlugin_viewall");

function ActivePlugin_viewall() {
    global $zbp;
    Add_Filter_Plugin('Filter_Plugin_Zbp_MakeTemplatetags','viewall_Script');
	Add_Filter_Plugin('Filter_Plugin_ViewPost_Template', 'viewall_Load');
    if($zbp->Config('viewall')->PostVIEWALLON == '1'){
        Add_Filter_Plugin('Filter_Plugin_Edit_Response3', 'viewall_ArticleViewall');
    }
}

function viewall_SubMenu($id){
    global $zbp;
    $arySubMenu = array(
        0 => array('基本设置', 'base', 'left', false),
    );
    foreach ($arySubMenu as $k => $v) {
        echo '<li><a href="?act=' . $v[1] . '" ' . ($v[3] == true ? 'target="_blank"' : '') . ' class="' . ($id == $v[1] ? 'on' : '') . '">' . $v[0] . '</a></li>';
    }
}

function viewall_color(){
    global $zbp;
    $skin = '';
    $color = $zbp->Config('viewall')->PostVIEWALLCOLOR;
    $skin .= ".readnum, .readall {color:#{$color}}";
    $skin .= ".readall i,.readon i {border-color:#{$color}}";
    $skin .= ".readon i {background:#{$color}}";
    $maskcolor = $zbp->Config('viewall')->PostVIEWALLMASKCOLOR;
    $skin .= ".readnum,.readall,.readon { background:linear-gradient(to bottom, rgba(255,255,255,0), #{$maskcolor} 50%); }";
    return $skin;
}

function viewall_Script(){
    global $zbp;
    $zbp->header .= '<link rel="stylesheet" href="'. $zbp->host .'zb_users/plugin/viewall/style/style.css">' . "\r\n";
    $zbp->header .= '<link rel="stylesheet" href="'. $zbp->host .'zb_users/plugin/viewall/include/skin.css">' . "\r\n";
    $zbp->header .= '<script src="'. $zbp->host .'zb_users/plugin/viewall/script/common.js"></script><script>$(function(){
            $.viewall('. $zbp->Config('viewall')->PostVIEWALLON .','. $zbp->Config('viewall')->PostVIEWALLHEIGHT .','. $zbp->Config('viewall')->PostVIEWALLSTYLE .');
        });</script>' . "\r\n";
}

function viewall_Load(&$template){
	global $zbp;
    $article = $template->GetTags('article');
    if($zbp->Config('viewall')->PostVIEWALLSHOW == '3'){
        viewall_isMobile() == '1' ? $viewallShow = true : $viewallShow = false;
    }elseif($zbp->Config('viewall')->PostVIEWALLSHOW == '2'){
        viewall_isMobile() == '1' ? $viewallShow = false : $viewallShow = true;
    }else{
        $viewallShow = true;
    }
    if($zbp->Config('viewall')->PostVIEWALLON == '1'){
    	if($viewallShow && (($article->Type == '0' && $article->Metas->viewall != '1' && $zbp->Config('viewall')->PostVIEWALLSINGLEON == '1') || ($article->Type == '1' && $article->Metas->viewall != '1' && $zbp->Config('viewall')->PostVIEWALLPAGEON == '1'))){
    		$article->Content = '<div class="viewall_plugin">'. $article->Content . '</div>';
    	}
    }
}

function viewall_ArticleViewall() {
    global $zbp,$article;
    echo '<div class="editmod">
            <label class="editinputname">自动展开全文</label>
            <input type="text" name="meta_viewall" value="'.$article->Metas->viewall.'" class="checkbox" />
        </div>';
}

function viewall_isMobile(){
    global $zbp;
    if (isset($_GET['must_use_mobile'])) {
        return true;
    }
    $is_mobile = false;
    $regex = '/android|adr|iphone|ipad|linux|windows\sphone|kindle|gt\-p|gt\-n|rim\stablet|opera|meego|Mobile|Silk|BlackBerry|opera\smini/i';
    if (preg_match($regex, GetVars('HTTP_USER_AGENT', 'SERVER'))) {
        $is_mobile = true;
    }
    return $is_mobile;
}

function InstallPlugin_viewall() {
	global $zbp;
    if (!$zbp->Config('viewall')->HasKey('Version')) {
        $array = array(
            'PostVIEWALLON' => '1',
            'PostVIEWALLHEIGHT' => '1000',
            'PostVIEWALLSHOW' => '1',
            'PostVIEWALLSTYLE' => '1',
            'PostVIEWALLCOLOR' => '0188fb',
            'PostVIEWALLMASKCOLOR' => 'ffffff',
            'PostVIEWALLSINGLEON' => '1',
            'PostVIEWALLPAGEON' => '1',
            'PostSAVECONFIG' => '1',
            );
        foreach ($array as $value => $intro) {
            $zbp->Config('viewall')->$value = $intro;
        }
        $zbp->Config('viewall')->Version = '1.2';
        $zbp->SaveConfig('viewall');
    }
}

function UninstallPlugin_viewall() {
	global $zbp;
    if ($zbp->Config('viewall')->PostSAVECONFIG == 0) {
        $zbp->DelConfig('viewall');
    }
}