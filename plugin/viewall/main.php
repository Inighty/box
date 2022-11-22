<?php
require '../../../zb_system/function/c_system_base.php';
require '../../../zb_system/function/c_system_admin.php';
$zbp->Load();
$action='root';
$appid='viewall';
if (!$zbp->CheckRights($action)) {$zbp->ShowError(6);die();}
if (!$zbp->CheckPlugin($appid)) {$zbp->ShowError(48);die();}

$blogtitle = '阅读更多[查看全文]插件设置';
$act = $_GET['act'] == "base" ? 'base' : $_GET['act'];

require $blogpath . 'zb_system/admin/admin_header.php';
require $blogpath . 'zb_system/admin/admin_top.php';
?>
<link rel="stylesheet" href="./style/admin.css?v=<?php echo $zbp->themeapp->version?>">
<script type="text/javascript" src="./script/custom.js?v=<?php echo $zbp->themeapp->version?>"></script>
<script type="text/javascript" src="./plugin/jscolor/jscolor.js?v=<?php echo $zbp->themeapp->version?>"></script>

<div class="twrapper">
<div class="theader">
	<div class="theadbg"><div class="tips">提示：<strong>Ctrl + S</strong> 可快速保存设置</div></div>
	<div class="tuser">
		<div class="tuserimg"><img src="style/images/sethead.png" /></div>
		<div class="tusername"><?php echo $blogtitle; ?></div>
	</div>
	<div class="tmenu">
		<ul>
		<?php viewall_SubMenu($act); ?>
		<li><a href="https://app.zblogcn.com/?auth=e9210072-2342-4f96-91e7-7a6f35a7901e" target="_blank">更多作品</a></li>
		<li><a href="https://jq.qq.com/?_wv=1027&k=44zyTKi" target="_blank">加入交流群</a></li>
		</ul>
	</div>
</div>
<div class="tmain">
<?php
if ($act == 'base') {
    if (isset($_POST['PostVIEWALLON'])) {
        CheckIsRefererValid();
        $zbp->Config('viewall')->PostVIEWALLON = $_POST['PostVIEWALLON'];
        $zbp->Config('viewall')->PostVIEWALLHEIGHT = $_POST['PostVIEWALLHEIGHT'];
        $zbp->Config('viewall')->PostVIEWALLSHOW = $_POST['PostVIEWALLSHOW'];
        $zbp->Config('viewall')->PostVIEWALLSTYLE = $_POST['PostVIEWALLSTYLE'];
        $zbp->Config('viewall')->PostVIEWALLCOLOR = $_POST['PostVIEWALLCOLOR'];
        $zbp->Config('viewall')->PostVIEWALLMASKCOLOR = $_POST['PostVIEWALLMASKCOLOR'];
        $zbp->Config('viewall')->PostVIEWALLSINGLEON = $_POST['PostVIEWALLSINGLEON'];
        $zbp->Config('viewall')->PostVIEWALLPAGEON = $_POST['PostVIEWALLPAGEON'];
        $zbp->Config('viewall')->PostSAVECONFIG = $_POST['PostSAVECONFIG'];
        $viewall_color = viewall_color();
        @file_put_contents($zbp->path . 'zb_users/plugin/viewall/include/skin.css', $viewall_color);
        $zbp->SaveConfig('viewall');
	    $zbp->BuildTemplate();
    	$zbp->ShowHint('good');
    }
?>
	<dl>
	<form method="post" class="setting">
		<input type="hidden" name="csrfToken" value="<?php echo $zbp->GetCSRFToken() ?>">
		<dt>基本设置</dt>
		<dd data-stretch="viewall" class="half">
			<label>阅读更多</label>
			<input type="text" id="PostVIEWALLON" name="PostVIEWALLON" class="checkbox" value="<?php echo $zbp->Config('viewall')->PostVIEWALLON; ?>" />
			<i class="help"></i><span class="helpcon">“ON”为启用长文章正文自动折叠；<br>“OFF”为加载全部正文。</span>
		</dd>
		<div class="viewallinfo"<?php echo $zbp->Config('viewall')->PostVIEWALLON == 1 ? '' : ' style="display:none"'; ?>>
		<dd class="half">
			<label for="PostVIEWALLHEIGHT">自动阅读高度</label>
			<input type="number" id="PostVIEWALLHEIGHT" name="PostVIEWALLHEIGHT" value="<?php echo $zbp->Config('viewall')->PostVIEWALLHEIGHT; ?>" min="1" step="1" class="settext" />
			<i class="help"></i><span class="helpcon">设置页面已读区域高度(单位px)。</span>
		</dd>
		<dd class="half">
			<label>使用场景</label>
			<select size="1" name="PostVIEWALLSHOW" id="PostVIEWALLSHOW">
                <option value="1"<?php if($zbp->Config('viewall')->PostVIEWALLSHOW == '1'){echo ' selected="selected"';}?>>PC和手机端</option>
                <option value="2"<?php if($zbp->Config('viewall')->PostVIEWALLSHOW == '2'){echo ' selected="selected"';}?>>仅PC端</option>
                <option value="3"<?php if($zbp->Config('viewall')->PostVIEWALLSHOW == '3'){echo ' selected="selected"';}?>>仅手机端</option>
            </select>
			<i class="help"></i><span class="helpcon">请设置“阅读更多”的使用场景。</span>
		</dd>
		<dd class="half">
			<label>插件样式</label>
			<select size="1" name="PostVIEWALLSTYLE" id="PostVIEWALLSTYLE">
                <option value="0"<?php if($zbp->Config('viewall')->PostVIEWALLSTYLE == '0'){echo ' selected="selected"';}?>>阅读更多</option>
                <option value="1"<?php if($zbp->Config('viewall')->PostVIEWALLSTYLE == '1'){echo ' selected="selected"';}?>>阅读剩余百分比</option>
                <option value="2"<?php if($zbp->Config('viewall')->PostVIEWALLSTYLE == '2'){echo ' selected="selected"';}?>>点击展开全文</option>
            </select>
			<i class="help"></i><span class="helpcon">请设置“阅读更多”样式，默认为显示阅读剩余百分比。</span>
		</dd>
		<dd class="half">
			<label for="PostVIEWALLCOLOR">主色调</label>
			<input type="text" name="PostVIEWALLCOLOR" id="PostVIEWALLCOLOR" class="color settext" value="<?php echo $zbp->Config('viewall')->PostVIEWALLCOLOR; ?>" />
			<i class="help"></i><span class="helpcon">请设置阅读全文主色调,默认为 0188fb。</span>
		</dd>
		<dd class="half">
			<label for="PostVIEWALLMASKCOLOR">蒙版颜色</label>
			<input type="text" name="PostVIEWALLMASKCOLOR" id="PostVIEWALLMASKCOLOR" class="color settext" value="<?php echo $zbp->Config('viewall')->PostVIEWALLMASKCOLOR; ?>" />
			<i class="help"></i><span class="helpcon">请设置段落蒙版颜色,默认为白渐变色 ffffff</span>
		</dd>
		<dd class="half">
			<label>文章阅读更多</label>
			<input type="text" id="PostVIEWALLSINGLEON" name="PostVIEWALLSINGLEON" class="checkbox" value="<?php echo $zbp->Config('viewall')->PostVIEWALLSINGLEON; ?>" />
			<i class="help"></i><span class="helpcon">“ON”为启用文章页长文章正文自动折叠；<br>“OFF”为文章页加载全部正文。</span>
		</dd>
		<dd class="half">
			<label>页面阅读更多</label>
			<input type="text" id="PostVIEWALLPAGEON" name="PostVIEWALLPAGEON" class="checkbox" value="<?php echo $zbp->Config('viewall')->PostVIEWALLPAGEON; ?>" />
			<i class="help"></i><span class="helpcon">“ON”为启用页面长文章正文自动折叠；<br>“OFF”为页面加载全部正文。</span>
		</dd>
		<dd>
			<label>保存配置信息</label>
			<input type="text" id="PostSAVECONFIG" name="PostSAVECONFIG" class="checkbox" value="<?php echo $zbp->Config('viewall')->PostSAVECONFIG; ?>" />
			<i class="help"></i><span class="helpcon">“ON”为保存配置信息，停用或卸载插件后不清空配置信息；<br>“OFF”为删除配置信息，停用或卸载插件后将清空配置信息。<br>若不再使用本插件，请选择"OFF"提交，则清空配置信息。</span>
		</dd>
		</div>
        <dd class="setok"><input type="submit" value="保存设置" class="setbtn" /></dd>
	</form>
	</dl>
<?php } ?>
</div>
</div>
<div class="tfooter">
	<p>Copyright &copy; 2010-<script>document.write(new Date().getFullYear());</script> <a href="https://www.toyean.com/" target="_blank">拓源网</a> all rights reserved.</p>
</div>
<?php
require $blogpath . 'zb_system/admin/admin_footer.php';
RunTime();
?>