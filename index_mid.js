    ;(function () {
        //if (window['x20211223HcH'] != undefined) return;
        var a = {}, ac = {};
        a.RK = a.oldRK = 0;
        var xid = getRandStr();
        var doc = document;
        var __tpltype = 1;
        var w_zl_url = '';
        var w_plan = [];
        w_plan[0] = [10396, 1, 1, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=fc1dJv3q8Hjb3OnHh4gT8yyvDjO8xZR4FPeJ%2BoOCQOYv%2FfPvMkh%2BgZtdjMVWWuy4IQ3WSuGVmftD061TKIOJM7ryF0eRJKcH1ndZPWemdtatPFw6IsiGEy1i31pDxskHL%2F3NJPo6M2Wax%2B7Gb061m0ivW3%2BOTAEZs2putTuWutycoAO%2BVQ&ck=1', 'manman', 'manman', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[1] = [10397, 1, 2, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=05c5mw56GHMzaaqvW08a6N5Uir%2B3eJ20p0rZEUNvfYaccYXMAcFpByKJvyqioVAsK2h9gZ1yHqToDHc1xwK3W5Toz3hLlnwGvBhxTHQkFlloCv0c%2FAmX2QeI8zx7B5Lllkp60KbzXJewrk1m7Ft%2BxBd5uC5Cy%2FEBi1J8d8YSwfbSwQN6zA&ck=1', 'manman', 'manman', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[2] = [10398, 1, 2, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=f91fa6IjrzKoyMLxU71xZQ3jPHBzygHh8l7ApEMv55ZrorZWGeqigLsEBxtstCd2NmSTlxMnA%2BPIg6YQzn%2FGsgvhQ8lByFAPdv1vp%2FHurfYHgChO3fqwwGw7Lag9f%2FyTCH6EkDYWe6EwAAkQSEQZTbYMuaf6q7oHrABh74pLc9dvVxBw8g&ck=1', 'manman', 'manman', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[3] = [10395, 1, 1, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=3116jFGpv08U3NbCw6u%2BAluXkOWCSvoUDcdjQvD1lKIaGoPgJBx3nr9fFgQCgRUStvxV%2FfkcHEU1ugeA6ho1TpWuhwjEGVNFMAh18D2R4VBVXzrsHpzG8w5P76EMy3LezPQlBMeiiAV3eJw5rZSF8b9jb%2BughOp9Fa%2Bk%2BgMdhmLpl%2BulUQ&ck=1', 'manman', 'manman', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[4] = [10330, 1, 1, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=a85175XKe%2B2E0CYMJ2tGvZAX6JHRG90CkH6tEp5f9NrbX2%2FGTnmNMTB5K6soEQ8DEwhc5Txk8zK5c1LRPjnolPQmFCqH6j7YV24ZT6%2Fa0jvWLzivDIsENjJfIEzcWWHUTlWhOvlJLbNRYane4JzoYpDVle9M6P89WKtuND2Qq10WfI8XQXeEXCmE5Wg1ww&ck=1', 'tanhua', 'tanhua', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[5] = [10331, 1, 1, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=c503%2FLgOJ%2BwMr%2BPMBMxQUSKIx5oCVAFYpqdWAIvYMa6KGDxDKaImNAc33WjkoDoz7evqJkkYmhvYWySannUsdGq4VPz7ivGIeINRKVooPRftFHvmJZLfq7EUnl8JmKNrQqJepudClZjW0kMq034x8Xas04rP7ikrIGRgBAW9XowR14TOILyfi2U2VnijkQ&ck=1', 'tanhua', 'tanhua', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[6] = [10332, 1, 1, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=a5210Pw7ug%2FtfIL2TGiZiaruYPljen%2FAUNUhQAfS%2B%2FDs%2BDRRjkuJDcerDpapHG6jpa3LP7HNZ3wEiSXvZ%2Fx0Ft1cFfvegAFGpITq7iITFDu%2B%2Fipdv8SgI3eYAyUqTcXc9YJ%2BpIpYgi3oLz7%2Fo1OWMQzl6wNpaeHlZfQ0q1TmVfNZbrqgAFd1eLubvX7czQ&ck=1', 'tanhua', 'tanhua', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[7] = [10333, 1, 1, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=304bfagAjcdTtclRey6nkpMASaLR68IrrLPuFW%2BpzIXt3tnSPN31%2FHgaEWfry0WspG26Cszbq8CYvx63tI1OdggA9BxUTuc59KJ1kOHtoZtmw16Ti7WEW8FY4hFaf6huLZ%2BTV9PouRep57Wqm%2BEqVt2plaZXcj%2B2dmtBl%2Bqi%2BN1L5SYNWzjOWuBBy2InwA&ck=1', 'tanhua', 'tanhua', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[8] = [10334, 1, 1, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=80fc%2FDLjM2hWaVRgAASXWESf1vKWmeO7nBSCSq5tyrksE0xe5y%2BaCrq2S7BpPrbez0g23wKp2DHYthWLd6TgXKr%2BdbYSjTpbUkmu4FLkLiZsCkfist8SXcQyZuPX5xN0tqLC96SU3CpotGiTvAPOA3i4udhMQc1mcEK97aAjln42oDpMwNJwiDIScc0Jyg&ck=1', 'tanhua', 'tanhua', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[9] = [10405, 1, 1, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=56638qfWohmrRNGOyqy0iyPqM17JmhvVWceDDdGONFlROg%2BQK%2FVlnS%2BetiRjgLp%2BfTFUwExFgcpiM8EjKjLSKtJ6N7FEBRURqQwGVXUNe0CJWR7JY1Gm30VqlAkCXyqc58X2Po83EgzSZ6lM8fJrmyTTnrCNOmMBLWQA&ck=1', 'manhua', 'manhua', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[10] = [10406, 1, 1, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=59617ZvCdTcYP3giwsdugrNs63TcpItsFI9lZfziMS62vhZb7QbJImzdCNNDBmoZvDWdAsHqPVapnvi19OaVq%2F6M1lfiExF9nKAgXXW3qr%2Fa4zuWQ5lrEu9ByyWzXBpeoswtAEayDRPtwJpJT9h6XdmfAjCCpTzlrzvz&ck=1', 'manhua', 'manhua', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[11] = [10407, 1, 1, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=8aa1JkOJBtVyTVcoyk4KLrbD7esB%2Fady7iiy1sgcQzEIFFF2Dr0MA8wZOG4qCFezwasLHYC4TNOWbzzkdXfCTKUXEnosmkr6v3DFherlrL4Ojvw7TzhvaJ7kQt6WluYwmkYzjvtK%2BtxEi29hpb2r89B46QTwHnuUNtBm&ck=1', 'manhua', 'manhua', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[12] = [10418, 1, 2, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=e69bYjxcrVJVFYOLy2Wq%2Fea7zIGpbyqwqYfqcEt0CkAyccQCzBkLwgW1DdmuRfopeuIF65HprgnKmlPXxJJx4WlUJm4EDrcMkpzzAQKj%2B9qldF%2FjgEGO6XR9iJBLvNeHjw4LJEeXrPpqyxZujQ3iMRdIdjK4c2KDQSZE&ck=1', 'manhua', 'manhua', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[13] = [10450, 3, 1, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=63625ddoM1p7ZTCFDE6JUc9v%2BWmqC1h1tgHr6wy49HuIeNIfOWiQNgODXynSuc7qYAr%2BK324U%2BmVawNfsfgpJPpNvCXz2%2F7NsaJBi5BS%2Bd5FI0dtbkki%2BvjrKoacf95qZlt%2BcMsK%2FGJd5cRsBjo30Pj68C%2Bc&ck=1', 'cangjingge', 'cangjingge', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[14] = [10455, 3, 2, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=f83eRARPrrYtuohi80100QXVlQh2wgFIEAt0WclQDr%2BFp7yA%2BjO5AXNnH4%2BxqAKIomlN9EC2oTkthMbkN28U%2BxD5coNBP3C0PErws%2F7rWYwboJJUAMbwCLSvhJy6uSaNxiSHemYXlj0ITjPu2JAaW6Lum%2FmP&ck=1', 'cangjingge', 'cangjingge', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[15] = [10607, 1, 1, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=6f8247cXJTu22ubgy7hKMSWENz7xewkElaHSZwW9G2V%2FlBXPBhUGSY7bI%2FZL6I0rPw1C8RwfNAX3ySJNUyc9AAk5h0UW4uj1sluj%2Fu7lIW8mR%2FSzYazR%2FfouVKMDA41t837ClgHp5l%2FEJVZ75xXNj2Hu8sZfegF1HoScTYehqQ&ck=1', 'jiateng', 'jiateng', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[16] = [10608, 1, 1, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=87f1UsxzTVicgdwJpZy%2BRknVAuAjCazs3wW5VQIqFzIygR3lm4z1%2F3DI8IOY401zLghrw8O%2FnfI7NeG976A1bwrdvbRZyR46JYhHPCIcxJbylsQVraRvMPeUU%2FgUxi0k7IZjG71USHRmXgNZA38IaX7Do%2BoJoYVNJiuFh1AfQQ&ck=1', 'jiateng', 'jiateng', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        w_plan[17] = [10612, 1, 2, 'https://nccp.yncjsc.cn:8080/bbk/sc?gp=e5759l2pnGiXV2UaaJ%2BA3CINaBwWbJ6UE0lTzo9r1knotC4MLHrUxMmNTn9ixvF1u7p7rhOXKsxYqi2AIvw4z7JAbZ8emoIaqbMCj0zfirDxSLA2P3Oh%2BO89frVCqnB%2BxPYU4XYvraeo45hyKxFRkJ5l0mpCugBQ4g3Yym0kkg&ck=1', 'jiateng', 'jiateng', '1|2|3|4|5|6|7|8|9|10|11|20', '', ''];
        var w_imglist = [];
        w_imglist[0] = ['https://dd-static.jd.com/ddimg/jfs/t1/222865/1/336/205115/617a0b9fE5f1df604/8836294bb6cc8815.gif', 2, 584, 10450, 1, 1, 640, 200, '', ''];
        w_imglist[1] = ['https://dd-static.jd.com/ddimg/jfs/t1/205140/6/14396/40720/618b5fbcE0abe6d20/d4b6bf4a39bcdfac.webp', 2, 591, 10344, 1, 1, 640, 200, '', ''];
        w_imglist[2] = ['https://dd-static.jd.com/ddimg/jfs/t1/203975/36/17312/96101/61a828b7Ea0ca23a4/7554f3690f4d40df.gif', 2, 592, 10343, 1, 1, 640, 200, '', ''];
        w_imglist[3] = ['https://dd-static.jd.com/ddimg/jfs/t1/169946/12/21839/740013/617a0ba1Ef08a71a0/5e016bcdb5a9c8bd.gif', 2, 593, 10342, 1, 1, 640, 200, '', ''];
        w_imglist[4] = ['https://dd-static.jd.com/ddimg/jfs/t1/169946/12/21839/740013/617a0ba1Ef08a71a0/5e016bcdb5a9c8bd.gif', 2, 593, 10455, 1, 1, 640, 200, '', ''];
        w_imglist[5] = ['https://dd-static.jd.com/ddimg/jfs/t1/198940/25/18086/677977/619b477fEbef04bbb/1dd84419df9996d8.gif', 2, 594, 10341, 1, 1, 640, 200, '', ''];
        w_imglist[6] = ['https://dd-static.jd.com/ddimg/jfs/t1/197746/35/14115/1002994/61713623E21c5851c/e258f2b5222cca75.gif', 2, 595, 10340, 1, 1, 640, 200, '', ''];
        w_imglist[7] = ['https://dd-static.jd.com/ddimg/jfs/t1/206109/22/15338/67718/6190d3caE8e1d4cb9/849ce69984be74f0.gif', 2, 601, 10334, 1, 1, 640, 200, '', ''];
        w_imglist[8] = ['https://dd-static.jd.com/ddimg/jfs/t1/140609/20/26548/96414/619f5892E6743f06c/b3fae4c4a0816843.gif', 2, 603, 10332, 1, 1, 640, 200, '', ''];
        w_imglist[9] = ['https://dd-static.jd.com/ddimg/jfs/t1/204021/25/13218/161361/617a0fc0Eab88332c/37ee0675d9bd9edc.gif', 2, 604, 10331, 1, 1, 640, 200, '', ''];
        w_imglist[10] = ['https://pic1.58cdn.com.cn/nowater/webim/big/n_v2060b12e33d1e46f2b8cb9ae097fd4459.gif', 2, 605, 10330, 1, 1, 640, 200, '', ''];
        w_imglist[11] = ['https://dd-static.jd.com/ddimg/jfs/t1/143589/13/25022/766811/61bbff65E33ec9b0f/5dfa05d12a940d6e.gif', 2, 616, 10842, 1, 1, 640, 200, '', ''];
        w_imglist[12] = ['https://dd-static.jd.com/ddimg/jfs/t1/213061/33/1893/189559/6176b758E4c8a737d/fbdfe12dda634668.gif', 2, 617, 10841, 1, 1, 640, 200, '', ''];
        w_imglist[13] = ['https://dd-static.jd.com/ddimg/jfs/t1/213061/33/1893/189559/6176b758E4c8a737d/fbdfe12dda634668.gif', 2, 617, 10851, 1, 1, 640, 200, '', ''];
        w_imglist[14] = ['https://dd-static.jd.com/ddimg/jfs/t1/204182/37/15842/563863/6195ee92E36cd0eb2/740e64bf96ddff25.gif', 2, 618, 10840, 1, 1, 640, 200, '', ''];
        w_imglist[15] = ['https://dd-static.jd.com/ddimg/jfs/t1/204182/37/15842/563863/6195ee92E36cd0eb2/740e64bf96ddff25.gif', 2, 618, 10850, 1, 1, 640, 200, '', ''];
        w_imglist[16] = ['https://dd-static.jd.com/ddimg/jfs/t1/218755/15/1866/111689/6176b749E413c9a43/cca1242a3d835799.gif', 2, 622, 10398, 1, 1, 640, 200, '', ''];
        w_imglist[17] = ['https://dd-static.jd.com/ddimg/jfs/t1/171553/16/25492/2923401/6190d321Eb6ea2fdf/ddcd35186e282521.gif', 2, 623, 10397, 1, 1, 640, 200, '', ''];
        w_imglist[18] = ['https://dd-static.jd.com/ddimg/jfs/t1/155687/13/25680/342720/61a97c4aE45faec71/f5c1d48eda5545e1.gif', 2, 624, 10396, 1, 1, 640, 200, '', ''];
        w_imglist[19] = ['https://dd-static.jd.com/ddimg/jfs/t1/213409/1/5028/530489/61971621E246e8849/a96d1c6462fa7bbe.gif', 2, 625, 10395, 1, 1, 640, 200, '', ''];
        w_imglist[20] = ['https://dd-static.jd.com/ddimg/jfs/t1/202100/37/14161/211917/617fad86E507aaedb/9ffbd256e9e4c058.gif', 2, 627, 10407, 1, 1, 640, 200, '', ''];
        w_imglist[21] = ['https://dd-static.jd.com/ddimg/jfs/t1/205777/10/13721/112500/617fad7fEb8a0535b/9a7ade24ee90ce3b.gif', 2, 631, 10418, 1, 1, 640, 200, '', ''];
        w_imglist[22] = ['https://dd-static.jd.com/ddimg/jfs/t1/209141/23/10038/101223/61986186E1e0e7ff4/83356be36ef396d2.gif', 2, 633, 10406, 1, 1, 640, 200, '', ''];
        w_imglist[23] = ['https://pic1.58cdn.com.cn/nowater/webim/big/n_v26f2c8ebd62574568a87dfd7fa58fff01.gif', 2, 642, 10929, 1, 1, 640, 200, '', ''];
        w_imglist[24] = ['https://dd-static.jd.com/ddimg/jfs/t1/223310/9/3780/83501/619f588dEac35e55b/b248fa684ef0f75f.gif', 2, 643, 10612, 1, 1, 640, 200, '', ''];
        w_imglist[25] = ['https://dd-static.jd.com/ddimg/jfs/t1/216675/31/6672/95674/61ad9c5aE6e3fb135/c74b123bedd25d35.gif', 2, 644, 10928, 1, 1, 640, 200, '', ''];
        w_imglist[26] = ['https://dd-static.jd.com/ddimg/jfs/t1/199618/11/14019/96101/617209f2E4bfa905b/a2c870021202abae.gif', 2, 645, 10848, 1, 1, 640, 200, '', ''];
        w_imglist[27] = ['https://dd-static.jd.com/ddimg/jfs/t1/199618/11/14019/96101/617209f2E4bfa905b/a2c870021202abae.gif', 2, 645, 10846, 1, 1, 640, 200, '', ''];
        w_imglist[28] = ['https://dd-static.jd.com/ddimg/jfs/t1/170866/15/21206/169257/61720a43Eda9df6f1/91773f13bbcae5b6.gif', 2, 646, 10927, 1, 1, 640, 200, '', ''];
        w_imglist[29] = ['https://dd-static.jd.com/ddimg/jfs/t1/170866/15/21206/169257/61720a43Eda9df6f1/91773f13bbcae5b6.gif', 2, 646, 10847, 1, 1, 640, 200, '', ''];
        w_imglist[30] = ['https://dd-static.jd.com/ddimg/jfs/t1/170866/15/21206/169257/61720a43Eda9df6f1/91773f13bbcae5b6.gif', 2, 646, 10849, 1, 1, 640, 200, '', ''];
        w_imglist[31] = ['https://dd-static.jd.com/ddimg/jfs/t1/216731/18/4920/127082/6195ee81E10e1501f/d82ead52c7dacb32.gif', 2, 647, 10608, 1, 1, 640, 200, '', ''];
        w_imglist[32] = ['https://dd-static.jd.com/ddimg/jfs/t1/216731/18/4920/127082/6195ee81E10e1501f/d82ead52c7dacb32.gif', 2, 647, 10845, 1, 1, 640, 200, '', ''];
        w_imglist[33] = ['https://dd-static.jd.com/ddimg/jfs/t1/140405/4/25990/89352/617209efEfc2a5ed0/f08dff55d1d9daa2.gif', 2, 648, 10926, 1, 1, 640, 200, '', ''];
        w_imglist[34] = ['https://dd-static.jd.com/ddimg/jfs/t1/140405/4/25990/89352/617209efEfc2a5ed0/f08dff55d1d9daa2.gif', 2, 648, 10607, 1, 1, 640, 200, '', ''];
        w_imglist[35] = ['https://dd-static.jd.com/ddimg/jfs/t1/140405/4/25990/89352/617209efEfc2a5ed0/f08dff55d1d9daa2.gif', 2, 648, 10844, 1, 1, 640, 200, '', ''];
        w_imglist[36] = ['https://dd-static.jd.com/ddimg/jfs/t1/216075/5/8712/106241/61c3c5faE86a9b384/d4e4db5de2ea817d.gif', 0, 707, 0, 1, 1, 640, 200, '', ''];
        var w_zoneid = '14891';
        var w_uid = '6269';
        var w_ads_size = 1;
        var w_width = 640;
        var w_height = 200;
        var w_cols = 1;
        var w_rows = 1;
        var w_backdomain = 'https://macnc.shenfire.cn:8080';
        var w_dtan_rate = 0;
        var w_touch_rate = 100;
        ;
        var cdate = new Date();
        var _zk_qiqi_cpc = -1;
        var _zvn_qiqi_cpc = 0;
        var _zj_qiqi_cpc = -1;
        var _is_jifei = 0;
        var __wangzhai_s_id = '515';

        var _body = doc.body ? doc.body : doc.documentElement;
        var g_plan_index = 0;
        a.ucb = -1, a.uce = -1, a.xx = 0, a.yy = 0;
        a.$ = function (e) {
            if (typeof e == 'string') return doc.getElementById(e); else return !1;
        };
        a.close = 0;
        a.imageUseStorage = parseInt('0', 10); //是否启用locastorage
        a.is_auto_time = parseInt('0', 10);
//a.ad_list = '{ad_list}';

        a.MT = function (b) {
            var Z = {};
            if (b in Z)
                return Z[b];
            return Z[b] = navigator.userAgent.toLowerCase().indexOf(b) != -1
        };
        a.MF = function (s) {
            if (!s)
                return '';
            str = s.replace(/[\u4E00-\u9FA5]/ig, 'x');
            return str;
        };
        a.GR = function () {
            var r;
            try {
                r = window.top.document.referrer;
            } catch (e) {
                r = document.referrer;
            }
            ;
            if (r) {
                return escape(r)
            } else {
                return '';
            }
            ;
        };
        a.GS = function () {
            var s;
            try {
                s = window.top.document.location.href;
            } catch (e) {
                s = doc.location.href;
            }
            ;
            if (s) {
                return escape(a.MF(s))
            } else {
                return '';
            }
            ;
        };
        a.GT = function () {
            return (-new Date().getTimezoneOffset()) / 60;
        };
        a.GF = function () {
            if (navigator.plugins && navigator.mimeTypes.length) {
                var b = navigator.plugins["Shockwave Flash"];
                if (b && b.description) return b.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
            } else if (a.MT("msie") && !window.opera) {
                var c = null;
                try {
                    c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
                } catch (e) {
                    var _a = 0;
                    try {
                        c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                        _a = 6;
                        c.AllowScriptAccess = "always"
                    } catch (e) {
                        if (a == 6) return _a.toString()
                    }
                    try {
                        c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                    } catch (e) {
                    }
                }
                if (c != null) {
                    var _a = c.GetVariable("$version").split(" ")[1];
                    return _a.replace(/,/g, ".")
                }
            }
            return "0";
        };
        a.GH = function () {
            return doc.body ? doc.body.offsetHeight : doc.documentElement.offsetHeight;
        };
        a.GW = function () {
            return doc.body ? doc.body.offsetWidth : doc.documentElement.offsetWidth;
        };
        a.Hi = function (o) {
            cdate.setTime(cdate.getTime() + 86400000);
            a.SCO("_click_a_" + w_zoneid, 1, cdate);
            try {
                a.$(o).style.display = 'none';
            } catch (e) {
            }

        };

        function getRandStr(len) {
            len = len || 8;
            var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';
            var maxPos = $chars.length;
            var pwd = '';
            for (i = 0; i < len; i++) {
                pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return pwd;
        }

        function getCookie(c_name) {
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(c_name + "=")
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1
                    c_end = document.cookie.indexOf(";", c_start)
                    if (c_end == -1) c_end = document.cookie.length
                    return unescape(document.cookie.substring(c_start, c_end))
                }
            }
            return ""
        }

        a.is = 0;
        a.SC = function (css) {
            a.is++;
            a.DSS();
            if (css == null) return;
            try {
                var h = doc.getElementsByTagName('head')[0];
                var s = doc.createElement('style');
                s.type = 'text/css';
                if (a.is > 1) {
                    s.id = xid + '_cs';
                }
                if (s.styleSheet) s.styleSheet.cssText = css; else s.appendChild(doc.createTextNode(css));
                h.appendChild(s);
                return !0;
            } catch (e) {
                return !1
            }
        };
        a.DSS = function () {
            if (a.$(xid + '_cs')) {
                doc.head.removeChild(a.$(xid + '_cs'));
            }
        };

        a.AE = function (f, e) {
            if (e == null) e = 'onresize';

            var oe = window[e];
            if (typeof window[e] != 'function') {
                window[e] = f
            } else {
                window[e] = function () {
                    oe();
                    f()
                }
            }
        };
        a.getOS = function () {
            var sUserAgent = navigator.userAgent.toLowerCase(),
                sys = navigator.platform.toLowerCase();
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os" || sUserAgent.match(/iphone/i) == "iphone";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android" || sUserAgent.match(/linux/i) == "linux" || sys.match(/linux/i) == "linux";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            var bIsWX = sUserAgent.match(/MicroMessenger/i) == "micromessenger";
            if (bIsAndroid) {
                return 1;
            } else if (bIsIphoneOs || bIsIpad) {
                return 2;
            } else {
                return 3;
            }
        };

        a.getBrowers = function () {
            var win = window;
            var nav = win.navigator;
            var doc = win.document;
            var ieAX = win.ActiveXObject;
            var ieMode = doc.documentMode;
            var REG_APPLE = /^Apple/;
            var isIe = ieAX || ieMode;

            function _testExternal(reg, type) {
                var external = win.external || {};
                for (var i in external) {
                    if (reg.test(type ? external[i] : i)) {
                        return true;
                    }
                }
                return false;
            }

            if (isIe || typeof win.scrollMaxX !== 'undefined' || REG_APPLE.test(nav.vendor || '')) {
                return 10;
            }
            var _track = 'track' in document.createElement('track');
            // 搜狗浏览器
            if (_testExternal(/^sogou/i, 0)) {
                return 6;
            }
            //opera
            if (_testExternal(/^opera/i, 0)) {
                return 2;
            }
            //qqbrowser
            if (_testExternal(/^qqbrowser/i, 0)) {
                return 4;
            }
            //qqbrowser
            if (_testExternal(/^qqbrowser/i, 0)) {
                return 1;
            }

            // 猎豹浏览器
            if (_testExternal(/^liebao/i, 0)) {
                return 5;
            }

            // firefox
            if (_testExternal(/mozilla.+\(mobile;.+gecko.+firefox/i, 0)) {
                return 9;
            }

            // chrome
            if (win.clientInformation && win.clientInformation.permissions) {
                return 8;
            }

            if (_track) {
                return 7;
            }
            return 10;
        }

        a.checkBrowers = function (planbs) {
            if (planbs == '') return true;
            var bs = a.getBrowers(),
                bsarr = planbs.split(',');
            for (var i = 0; i <= bsarr.length; i++) {
                if (bsarr[i] == bs) {
                    return true;
                    break;
                }
            }
            return false;
        }
        a.checkPlanOS = function (planOS) {
            var os = a.getOS(); //1android 2ios 3其他/pc
            if (os == 1) {
                if (planOS == 0 || planOS == 1 || planOS == 3 || planOS == 5) return true;
            } else if (os == 2) {
                if (planOS == 0 || planOS == 2 || planOS == 3) return true;
            } else if (os == 3) {
                if (planOS == 0 || planOS == 4 || planOS == 5) return true;
            }
            return false;
        };
        a.checkLimitAreaPlan = function (is_areabook, arealist) {
            if (is_areabook === '') return true;
            var city = a.getCity();
            if (is_areabook == '1') {
                //允许选中地区投放
                if (arealist.indexOf(city) !== -1) return true;
                else return false;
            } else {
                //拒绝选中地区投放
                if (arealist.indexOf(city) !== -1) return false;
                else return true;
            }
        };
        a.getCity = function () {
            var city = a.GCO('LMCITYASGASDGCI');
            if (typeof city == 'undefined' || city == null || city == '') {
                a.loadJs('//ip.ws.126.net/ipquery?');
                setTimeout(function () {
                    try {
                        cdate.setTime(cdate.getTime() + 86400);
                        city = a.formatCity(localAddress.province, localAddress.city);
                        a.SCO('LMCITYASGASDGCI', city, cdate);
                    } catch (e) {
                    }
                }, 2000);
                city = city ? city : '附近';
            }
            return city;
        };
        a.formatCity = function (prov, city) {
            prov = prov.replace('市', '');
            city = city.replace('市', '');
            var citylist = '北京,天津,上海,重庆,台湾,香港,澳门';
            return citylist.indexOf(prov) > -1 ? prov : city;
        };
        a.loadJs = function (url, charset) {
            charset = charset || 'gb2312';
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = url;
            script.charset = 'gb2312';
            try {
                document.body.appendChild(script);
            } catch (e) {
                document.head.appendChild(script);
            }
        };

        a.GE = function (i) {
            var e = 1 * i.substring(1, i.length)
                , o = i.substring(0, 1);
            return "s" == o ? 1e3 * e : "h" == o ? 60 * e * 60 * 1e3 : "d" == o ? 24 * e * 60 * 60 * 1e3 : void 0
        };
        a.SCO = function (n, v, e) {
            document.cookie = n + "=" + escape(v) + ";expires=" + e.toGMTString() + ";path=/";
        };
        a.GCO = function (n) {
            var arr = document.cookie.match(new RegExp("(^| )" + n + "=([^;]*)(;|$)"));
            if (arr != null) return unescape(arr[2]);
            return '';
        };
        a.DCO = function (i) {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval = a.GCO(i);
            if (cval != null)
                document.cookie = i + "=" + cval + ";expires=" + exp.toGMTString();
        };
        a.dopv = function (op, siteid, zoneid, imgid, planid) {
            var url = w_backdomain + '/d.php?op=' + op + '&siteId=' + siteid + '&imgid=' + imgid + '&zoneId=' + zoneid + '&planId=' + planid + '&time=' + new Date().getTime();
            new Image().src = url;
        };
        a.showpv = function (zoneid, siteid, planid, imgid) {
            var v = a.GCO("_s_v_" + zoneid);
            var _arr = v.split(",");
            var _showid = planid + ',';
            if (!v || !a.in_array(_arr, planid)) {
                a.dopv('pv', siteid, zoneid, imgid, planid);
                cdate.setTime(cdate.getTime() + 3600000);
                var _str = v ? v + _showid : _showid;
                a.SCO("_s_v_" + zoneid, _str, cdate);
            }
        };

        a.CR = function () {
            if (1 === a.close) return false;
            for (var i = 0; i < w_plan.length; i++) {
                var aplan = w_plan[i];
                if (a.checkPlanOS(aplan[2])) return true;
            }
            return false;
        };
        a.GP = function () {
            var o = a.GNP(w_plan, false);
            return o;
        };
        a.in_array = function (o, k) {
            for (var i = 0; i < o.length; i++) if (o[i] == k) return true;
            return false;
        };
        __N = 0
        a.GNP = function (arrPlan, flag) {
            if (__N >= 2) return false; //debug
            flag = flag || false;
            if (typeof arrPlan == "undefined") return null;
            if (arrPlan.length == 0) return null;
            var has_c_p = a.GCO("_has_click_plan" + w_zoneid);
            if (flag) {
                cdate.setTime(cdate.getTime() + 2 * 3600000);
                a.SCO("_has_click_plan" + w_zoneid, '', cdate);
            }

            var arrEffPlan = [];
            for (var i = 0; i < arrPlan.length; i++) {
                var arrPlan222 = arrPlan[i];
                if (has_c_p.indexOf('|' + arrPlan222[0] + '|') === -1 &&
                    a.checkPlanOS(arrPlan222[2]) &&
                    a.checkBrowers(arrPlan222[9]) &&
                    a.checkLimitAreaPlan(arrPlan222[7], arrPlan222[8])
                ) arrEffPlan.push(arrPlan222);
            }
            if (arrEffPlan.length == 0) return a.GNP(arrPlan, true); else {
                var retPlan = a.GRIP(arrEffPlan);
                return retPlan;
            }
        };

        a.GRIP = function (arrPlan) {
            var rnd_count = 0;
            for (var i = 0; i < arrPlan.length; i++) rnd_count += parseInt(arrPlan[i][1]);
            var rnd_num = Math.ceil(Math.random() * rnd_count);
            var bindex = 0;
            for (var i = 0; i < arrPlan.length; i++) {
                bindex += parseInt(arrPlan[i][1]);
                if (rnd_num <= bindex) return arrPlan[i];
            }
            return 0;
        };
        a.getRandImg = function (planid, imgtypes) {
            imgtypes = '|' + imgtypes + '|';
            var os = a.getOS();//1android 2ios 3pc
            var ret1 = [];
            var ret2 = [];
            var ret3 = [];
            var k1 = 0;
            var k2 = 0;
            var k3 = 0;
            for (var i = 0; i < w_imglist.length; i++) {
                var sys = w_imglist[i][1];
                if (os == 3) {
                    //pc端
                    if (sys == 0 || sys == 1) {
                        var info = [w_imglist[i][0], w_imglist[i][2], w_imglist[i][5], w_imglist[i][6], w_imglist[i][7], w_imglist[i][8], w_imglist[i][9]];
                        if (w_imglist[i][3] == planid) {
                            ret2[k2] = info;
                            k2++;
                        } else if (w_imglist[i][3] == 0 && imgtypes.indexOf('|' + w_imglist[i][4] + '|') > -1) {
                            ret1[k1] = info;
                            k1++;
                        } else if (imgtypes == '' && w_imglist[i][3] == 0) {
                            ret3[k3] = info;
                            k3++;
                        }
                    }
                } else {
                    console.log(sys);
                    //手机端
                    if (sys == 0 || sys == 2) {
                        var info = [w_imglist[i][0], w_imglist[i][2], w_imglist[i][5], w_imglist[i][6], w_imglist[i][7], w_imglist[i][8], w_imglist[i][9], w_imglist[i][10]];
                        if (w_imglist[i][3] == planid) {
                            ret2[k2] = info;
                            k2++;
                        } else if (w_imglist[i][3] == 0 && imgtypes.indexOf('|' + w_imglist[i][4] + '|') > -1) {
                            ret1[k1] = info;
                            k1++;
                        } else if (imgtypes == '' && w_imglist[i][3] == 0) {
                            ret3[k3] = info;
                            k3++;
                        }
                    }
                }
            }
            if (ret2.length > 0) {
                var random = parseInt(Math.random() * ret2.length);
                return ret2[random];
            } else if (ret1.length > 0) {
                var random = parseInt(Math.random() * ret1.length);
                return ret1[random];
            } else if (ret3.length > 0) {
                var random = parseInt(Math.random() * ret3.length);
                return ret3[random];
            }
            return false;
        };
        a.getMousePos = function (event) {
            var e = event || window.event;
            var scrollX = doc.documentElement.scrollLeft || doc.body.scrollLeft;
            var scrollY = doc.documentElement.scrollTop || doc.body.scrollTop;
            if (!e) {
                return {'x': 0, 'y': 0};
            }
            var x = e.pageX || e.clientX + scrollX;
            var y = e.pageY || e.clientY + scrollY;
            return {'x': x, 'y': y};
        };

        a.getPlatform = function () {
            return navigator.platform;
        };

// 获取js文件文件传递的参数
        a.getArgs = function () {
            var sc = document.getElementsByTagName('script');
            var paramsArr = (typeof sc[sc.length - 1].src.split('?')[1] == 'undefined') ? [] : sc[sc.length - 1].src.split('?')[1].split('&');
            var args = {}, argsStr = [], param, t, name, value;
            for (var ii = 0, len = paramsArr.length; ii < len; ii++) {
                param = paramsArr[ii].split('=');
                name = param[0], value = param[1];
                if (typeof args[name] == "undefined") { //参数尚不存在
                    args[name] = value;
                } else if (typeof args[name] == "string") { //参数已经存在则保存为数组
                    args[name] = [args[name]]
                    args[name].push(value);
                } else {  //已经是数组的
                    args[name].push(value);
                }
            }
            /*在实际应用中下面的showArg和args.toString可以删掉，这里只是为了测试函数getArgs返回的内容*/
            var showArg = function (x) {   //转换不同数据的显示方式
                if (typeof (x) == "string" && !/\d+/.test(x)) return "'" + x + "'";   //字符串
                if (x instanceof Array) return "[" + x + "]" //数组
                return x;   //数字
            }
            //组装成json格式
            args.toString = function () {
                for (var ii in args) argsStr.push(ii + ':' + showArg(args[ii]));
                return '{' + argsStr.join(',') + '}';
            }
            return function () {
                return args;
            } //以json格式返回获取的所有参数
        };
        a.CP = function (i) {
            var _href = a._date_href;
            var o = a.getMousePos();
            var action = _href;
            var myvalue = a._date_sp.split(',');
            var u_sw = window.screen.width;
            var u_sh = window.screen.height;
            var u_url = a.GS();
            var r_url = a.GR();
            var u_scd = window.screen.colorDepth;
            var u_bw = 1, u_bh = 1;
            if (window.innerWidth) {
                u_bw = window.innerWidth
            } else {
                if ((document.body) && (document.body.clientWidth)) {
                    u_bw = document.body.clientWidth
                }
            }
            if (window.innerHeight) {
                u_bh = window.innerHeight
            } else {
                if ((document.body) && (document.body.clientHeight)) {
                    u_bh = document.body.clientHeight
                }
            }

            var u_utz = a.GT();
            var u_fv = a.GF();
            var ucx = a.xx;
            var ucy = a.yy;
            var ucb = a.ucb; //todo
            var uce = a.uce; //todo
            var s_id = __wangzhai_s_id; //todo
            //var aid = i ? i.substr(0, 8):'';
            //todo
            var _url = action + '&u_sw=' + u_sw + '&u_sh=' + u_sh + '&u_url=' + r_url + '&r_url=' + u_url + '&u_scd=' + u_scd + '&u_bw=' + u_bw
                + '&u_bh=' + u_bh + '&u_utz=' + u_utz + '&u_fv=' + u_fv + '&ucx=' + ucx + '&ucy=' + ucy + '&ucb=' + ucb + '&uce=' + uce + '&vt=' + parseInt(new Date().getTime() / 1000) + '&s_id=' + s_id + '&imgid=' + myvalue[0] + '&plat=' + a.getPlatform();
            if (1 == i) {
                return _url;
            } else {
                click(0, 0, 10);
                a.dopv('click', __wangzhai_s_id, w_zoneid, myvalue[0], myvalue[2]);
                var has_c_p = a.GCO("_has_click_plan" + w_zoneid);
                if (has_c_p.indexOf('|' + myvalue[2] + '|') === -1) {
                    has_c_p += '|' + myvalue[2] + '|';
                }
                cdate.setTime(cdate.getTime() + 2 * 3600000);
                a.SCO("_has_click_plan" + w_zoneid, has_c_p, cdate);
                window.location.href = _url;
            }

        };
        a.CLB = function () {
            var _rand = Math.ceil(Math.random() * 100);
            var _ctime = a.GCO('{close_time_type}');
            var _close_time = parseInt('{close_time}');
            var _t = (_rand <= parseInt('{close_gailv}')) ? 1 : 0;
            var _t2 = (!_close_time || _ctime < _close_time);
            if (_t && _t2) {
                _ctime = _ctime ? _ctime + 1 : 1;
                var d = new Date();
                var _time = d.setTime(d.getTime());
                d.setTime(d.getTime() + 3600000);
                _close_time && a.SCO('{close_time_type}', _ctime, d)
                a.CP(xid + '1_1');
            }
        };

        a.getPlanByPlanId = function (e) {
            var _i = w_plan.length;
            while (_i--) {
                if (e == w_plan[_i][0]) return w_plan[_i];
            }
            return false;
        };

        a.getImgInfo = function (index) {
            return [w_imglist[index][0], w_imglist[index][2], w_imglist[index][5], w_imglist[index][6], w_imglist[index][7], w_imglist[index][8], w_imglist[index][9], w_imglist[index][10], w_imglist[index][3]]
        };
        a.R = function () {
            if (!a.CR()) return;
            var os = a.getOS(),
                cookie_name = 'img_has_show';

            w_plan = w_plan.filter(function (p) {
                return p[2] == os;
            })

            var new_plan = [];
            for (var i = 0; i < w_plan.length; i++) {
                new_plan.push(w_plan[i][0]);
            }
            w_imglist = w_imglist.filter(function (img) {
                return new_plan.indexOf(img[3]) > -1 && (!a.GCO(cookie_name) || (a.GCO(cookie_name).split(',').indexOf((img[2] + '|' + img[3]).toString()) == -1));
            }).sort(function (a, b) {
                return 1 == a.is_auto_time ? Math.random() - 0.5 : b[11] - a[11];
            })

            if (w_imglist.length == 0) return;


            var o = doc.compatMode == "BackCompat" ? doc.body : doc.documentElement;
            var pos = w_width / w_height;
            var w = o.clientWidth;
            var h = parseInt(w / pos);
            var html = "";
            var _R = '';
            a.s = [];
            for (var i = 0; i < w_rows; i++) {
                for (var j = 0; j < w_cols; j++) {
                    var index = (i + j) < w_imglist.length ? (i + j) : Math.round(Math.random() * w_imglist.length),
                        imginfo = a.getImgInfo(index),
                        planid = imginfo[8],
                        ads = a.getPlanByPlanId(planid),
                        url = ads[3],
                        title = ads[4],
                        description = ads[5],
                        imgtypes = ads[6],
                        imgurl = imginfo[0],
                        imgid = imginfo[1],
                        img_style = a.img_style = imginfo[2],
                        img_width = parseInt(imginfo[3] * w / w_width),
                        img_height = parseInt(imginfo[4] * h / w_height),
                        text_width = parseInt(w - img_width - 30),
                        img_title = imginfo[5];
                    if (img_title.indexOf('{city}') > -1) {
                        img_title = img_title.replace('{city}', a.getCity());
                    }
                    var img_description = imginfo[6];
                    if (img_description.indexOf('{city}') > -1) {
                        img_description = img_description.replace('{city}', a.getCity());
                    }

                    var img_has_show = a.GCO(cookie_name);
                    img_has_show += img_has_show ? ',' + imgid + '|' + planid : +imgid + '|' + planid;
                    cdate.setTime(cdate.getTime() + 3600000);
                    a.SCO(cookie_name, img_has_show, cdate);
                    if (w_imglist.length <= 1) {
                        a.SCO(cookie_name, '', cdate);
                    }

                    a._date_href = url;
                    a._date_sp = imgid + "," + w_zoneid + "," + planid;
                    a._img_url = imgurl;
                    a._title = img_title;

                    if (imginfo[7] == 1) {
                        a.iscode = 1;
                        a.RK = 0;

                        html = a.doAdsCode(imginfo);
                        if (a.$('x20211223HcH_2'))
                            a.$('x20211223HcH_2').style.display = 'none';
                        a.showpv(w_zoneid, __wangzhai_s_id, planid, imgid);
                        break;
                    } else {
                        a.RK = a.oldRK;
                        a.s.push(imginfo[0]);
                        html += '<cmaks data-sp="' + imgid + "," + w_zoneid + "," + planid + '" id="' + xid + w_rows + '_' + w_cols + '_2" data-href="' + url + '" style="text-align: left;">';
                        html += a.TPL(img_style, imgurl, w, h, img_width, img_height, img_title, img_description);
                        html += '</cmaks>';
                        // console.log(rand_id_2);
                        var o = doc.compatMode == "BackCompat" ? doc.body : doc.documentElement;
                        var pos = w_width / w_height;
                        var w = o.clientWidth;
                        var h = parseInt(w / pos);

                        ///_R += '#x20211223HcH{padding-top:'+h +'px;}';
                        a.showpv(w_zoneid, __wangzhai_s_id, planid, imgid);
                    }

                }
            }
            if (typeof ismp === 'undefined' || typeof ismp == '') {
                a.$(xid + "Fa").innerHTML = html;
                if (_R) {
                    a.is = 0;
                    a.SC(_R);
                }
                a.resize(w, h);
                var e = document.querySelectorAll("#" + xid + "Fa img"),
                    n = 0,
                    _a = setInterval(function () {
                        (e.length > 0) && !e[n].src && a.s[n] && a.transform(e[n], a.s[n]),
                            n++,
                        n >= e.length && clearInterval(_a)
                    }, 1)
                for (var i = 0; i < w_rows; i++) {
                    for (var j = 0; j < w_cols; j++) {
                        var cp_id = xid + w_rows + '_' + w_cols + '_2';
                        if (a.$(cp_id)) {
                            a.cpTouch(cp_id);
                        }
                    }
                }
            }
        };

        a.cpTouch = function (cp_id) {
            var event = 'click';
            var r = parseInt(Math.random() * 100) + 1;
            if (r < w_touch_rate) {
                event = 'touchstart';
            }
            a.$(cp_id).addEventListener(event, function () {
                a.CP(cp_id);
            });
        }

        a.Base64 = function () {
            _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            this.encode = function (input) {
                var output = "";
                var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
                var i = 0;
                input = _utf8_encode(input);
                while (i < input.length) {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);
                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;
                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64;
                    } else if (isNaN(chr3)) {
                        enc4 = 64;
                    }
                    output = output +
                        _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                        _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
                }
                return output;
            }

            this.decode = function (input) {
                var output = "";
                var chr1, chr2, chr3;
                var enc1, enc2, enc3, enc4;
                var i = 0;
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                while (i < input.length) {
                    enc1 = _keyStr.indexOf(input.charAt(i++));
                    enc2 = _keyStr.indexOf(input.charAt(i++));
                    enc3 = _keyStr.indexOf(input.charAt(i++));
                    enc4 = _keyStr.indexOf(input.charAt(i++));
                    chr1 = (enc1 << 2) | (enc2 >> 4);
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                    chr3 = ((enc3 & 3) << 6) | enc4;
                    output = output + String.fromCharCode(chr1);
                    if (enc3 != 64) {
                        output = output + String.fromCharCode(chr2);
                    }
                    if (enc4 != 64) {
                        output = output + String.fromCharCode(chr3);
                    }
                }
                output = _utf8_decode(output);
                return output;
            }

            _utf8_encode = function (string) {
                string = string.replace(/\r\n/g, "\n");
                var utftext = "";
                for (var n = 0; n < string.length; n++) {
                    var c = string.charCodeAt(n);
                    if (c < 128) {
                        utftext += String.fromCharCode(c);
                    } else if ((c > 127) && (c < 2048)) {
                        utftext += String.fromCharCode((c >> 6) | 192);
                        utftext += String.fromCharCode((c & 63) | 128);
                    } else {
                        utftext += String.fromCharCode((c >> 12) | 224);
                        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                        utftext += String.fromCharCode((c & 63) | 128);
                    }

                }
                return utftext;
            }

            _utf8_decode = function (utftext) {
                var string = "";
                var i = 0;
                var c = c1 = c2 = 0;
                while (i < utftext.length) {
                    c = utftext.charCodeAt(i);
                    if (c < 128) {
                        string += String.fromCharCode(c);
                        i++;
                    } else if ((c > 191) && (c < 224)) {
                        c2 = utftext.charCodeAt(i + 1);
                        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                        i += 2;
                    } else {
                        c2 = utftext.charCodeAt(i + 1);
                        c3 = utftext.charCodeAt(i + 2);
                        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                        i += 3;
                    }
                }
                return string;
            }
        }

        a.doAdsCode = function (e) {
            if (!e) return;
            var d = e[1], o = doc.compatMode == "BackCompat" ? doc.body : doc.documentElement,
                pos = w_width / w_height,
                w = o.clientWidth,
                h = parseInt(w / pos),
                iw = parseInt(e[3] * w / w_width),
                ih = parseInt(e[4] * h / w_height),
                base64 = new a.Base64(),
                c = base64.encode(a.CP(1) + '|||' + e[0]);
            return "<iframe src='https://bbk6269.xiaodongjun.com:8080/cpc/c.html?tc=" + c + "' style='width: " + iw + "px;height: " + ih + "px;' frameborder='no' scrolling='no'></iframe>";
        }
        a.support = function (t) {
            try {
                var e = window[t]
                    , n = "__test__";
                return e.setItem(n, n),
                    e.removeItem(n),
                    !0
            } catch (t) {
                return !1
            }
        }
        var g = function () {
            var t = null;
            !function () {
                try {
                    t = new XMLHttpRequest
                } catch (e) {
                    try {
                        t = new ActiveXObject("Msxml2.XMLHTTP")
                    } catch (e) {
                        try {
                            t = new ActiveXObject("Microsoft.XMLHTTP")
                        } catch (t) {
                        }
                    }
                }
            }();
            var e = function (e, n, a, i) {
                t ? (t.open("GET", e, !0),
                    t.callback = a,
                    t.withCredentials = !!i,
                    t.onreadystatechange = function () {
                        console.log("readyState: " + t.readyState + " status: " + t.status + " statusText: " + t.statusText),
                        4 == t.readyState && 200 == t.status && t.callback()
                    }
                    ,
                    t.send(n)) : console.log("XMLHttpRequest Not Support.")
            }
                , n = function () {
            };
            return {
                get: e,
                post: n
            }
        };
        g = new g;
        a.setImg = function (e, n) {
            e.src = n;
            var _R = '.x20211223HcH_r{background-image:url(' + n + ');}';
            if ('' == 'bottom') {
                _R += 'body:after{background-image:url(' + n + ');}';
            } else if ('' == 'top') {
                _R += 'body:before{background-image:url(' + n + ');}';
            } else {

                var o = doc.compatMode == "BackCompat" ? doc.body : doc.documentElement;
                var pos = w_width / w_height;
                var w = o.clientWidth;
                var h = parseInt(w / pos);
                _R += '#' + xid + '1_1:before{height:' + h + 'px;}';
                if (a.img_style == 1) {
                    _R += '#' + xid + '1_1:before{background-image:url(' + n + ');}';

                }
            }
            if (typeof ismp === 'undefined' || typeof ismp == '') {
                a.SC(_R);
            }
        }
        a.transform = function (e, n) {
            if (!a.support("localStorage") || !a.imageUseStorage)
                return void (a.setImg(e, n));
            var _a = function (n, c) {
                t = n.split("#"),
                    q = t.length > 1 ? "data:image/" + t[1] + ";base64," + t[0] : n,
                    a.setImg(e, q),
                    //t.length < 2 && localStorage.removeItem(c),
                2 == t.length && localStorage.setItem(c, q)
            }
                , r = n.split(".");
            r.pop(),
                r.push("txt"),
                r = r.join(".");
            var o = r.split("/");
            o = o[o.length - 1];
            1 == (new Date).getDay() && 20 == (new Date).getHours() && localStorage.clear();
            return localStorage.getItem(o) ? _a(localStorage.getItem(o), o)
                :
                void g.get(r, null, function () {
                    var t = "whatsapp"
                        , e = localStorage.getItem(t);
                    e = null == e ? {} : JSON.parse(e),
                        e[o] = (new Date).getTime();
                    var n = Object.getOwnPropertyNames(e);
                    n.length >= 20 && localStorage.removeItem(localStorage.key(n[0])),
                        localStorage.setItem(t, JSON.stringify(e)),
                        _a(this.responseText, o);
                })
        }

        a.TPL = function (img_style, imgurl, width, height, img_width, img_height, img_title, img_description) {
            var thtml;
            var text_width = parseInt(width - img_width - 30);
            switch (img_style) {
                case 1:
                    if (typeof (__tpltype) != 'undefined') {
                        thtml = '<img id="' + xid + 'Im"  style="height: ' + height + 'px;display: block;" />';
                    } else {
                        // thtml = '<img id="' + xid + 'Im"  style="height: ' + height + 'px;" />';
                        thtml = '<img id="' + xid + 'Im" />';
                    }
                    break;
                case 2:
                    //thtml = '<img id="'+ xid+'Im" src="' + imgurl + '" style="width:'+img_width+'px;height: '+img_height+'px;vertical-align:middle;" /><div id="'+ xid+'In2" style="width: '+text_width+'px;text-align:left;margin-left:10px;vertical-align:middle;display: inline-block;color:#575757;"><div id="'+ xid+'In2_1" style="font-weight:bold;font-size:16px;">'+img_title+'</div><div id="'+ xid+'In2_2" style="font-size: 10px;padding-top:15px;">'+img_description+'</div></div>';
                    thtml = '<img id="' + xid + 'Im"  style="position:absolute;left:0;top:50%;margin-top:-' + img_height / 2 + 'px;width:' + img_width + 'px;height: ' + img_height + 'px;vertical-align:middle;" /><div id="' + xid + 'In2" style="width: ' + text_width + 'px;text-align:left;margin-left:10px;vertical-align:middle;display: inline-block;color:#575757;position:absolute;right:0;top:50%;margin-top:-40px;"><div id="' + xid + 'In2_1" style="font-weight:bold;font-size:16px;line-height: 22px">' + img_title + '</div><div id="' + xid + 'In2_2" style="font-size: 10px;padding-top:15px;">' + img_description + '</div></div>';
                    break;
                case 3:
                    thtml = '<div id="' + xid + 'In3" style="width: ' + text_width + 'px;text-align:left;margin-right:10px;' +
                        'vertical-align:middle;display: inline-block;color:#575757;position:absolute;left:0;top:50%;' +
                        'margin-top:-40px;"><div id="' + xid + 'In3_1"' +
                        ' style="font-weight:bold;font-size:18px;">' + img_title + '</div>' +
                        '<div id="' + xid + 'In3_2" style="font-size: 10px;padding-top:15px;">' + img_description + '</div></div>' +
                        '<img id="' + xid + 'Im" style="position:absolute;right:0;top:50%;margin-top:-' + img_height / 2 + 'px;width:' + img_width + 'px;height: ' + img_height + 'px;vertical-align:middle;" />';
                    break;
                case 4:
                    thtml = '<div id="' + xid + 'In4_1" style="text-align:left;font-weight:bold;font-size:16px;margin:5px 0;text-overflow:ellipsis;word-wrap: break-word;word-break: break-all;overflow: hidden;white-space:nowrap;color:#575757;">' + img_title + '</div><img id="' + xid + 'Im" style="height: ' + img_height + 'px;vertical-align:middle;" /><div id="' + xid + 'In4_2" style="font-size: 10px;padding-top:5px;text-align:left;color:#999;">' + img_description + '</div>';
                    break;
            }
            return thtml;
        };
        a.DK = function () {
            cdate.setTime(cdate.getTime() + 3600000);
            a.SCO('_s_v_' + w_zoneid, '', cdate);
        };
        a.showDtan = function () {
            var r = parseInt(Math.random() * 100) + 1;
            if (r < w_dtan_rate) {
                a.$(xid + 'Fx').style.display = 'block';
                a.$(xid + 'Fx').style.height = '900%';
                a.$(xid + 'Fx').style.width = '900%';
            } else {
                var zz = parseInt('0', 10);
                if (zz > 0) {
                    a.$(xid + 'Fx').style.height = hh * (1 + zz / 100) + 'px';
                    a.$(xid + 'Fx').style.display = 'block';
                }
            }
        };

//跳转域名预解析
        a.dnsprefetch = function () {
            var is_show_dsn = a.GCO('is_show_dsn');
            if (!is_show_dsn) {
                cdate.setTime(cdate.getTime() + 3600000);
                a.SCO('is_show_dsn', 1, cdate);
                new Image().src = 'https://nccp.yncjsc.cn:8080';
            }
        };
        a.dnsprefetch();

        ac.touchSatrtFunc = function (evt) {
            try {
                var touch = evt.touches[0];
                var x = Math.ceil(touch.pageX);
                var y = Math.ceil(touch.pageY);
                startTop = Math.ceil(document.body.scrollTop);
                startY = y;
                startX = x;
                EndX = x;
                EndY = y;

            } catch (e) {

            }
        }

        ac.touchMoveFunc = function (evt) {
            try {
                var touch = evt.touches[0];
                var x = Math.ceil(touch.pageX);
                var y = Math.ceil(touch.pageY);
                EndX = x;
                EndY = y;
            } catch (e) {

            }
        }

        ac.touchEndFunc = function (evt) {
            try {
                a.ucb = -1 == a.ucb ? EndX : a.ucb + ',' + EndX;
                a.uce = -1 == a.uce ? (startY - startTop) : a.uce + ',' + (startY - startTop);

                a.xx = startX;
                a.yy = startY - startTop;


            } catch (e) {
                // console.log('touchEndFunc' + e.message);
            }
        }

        ac.bindEvent = function () {
            document.addEventListener('touchstart', ac.touchSatrtFunc, false);
            document.addEventListener('touchmove', ac.touchMoveFunc, false);
            document.addEventListener('touchend', ac.touchEndFunc, false);
        }

        ac.init = function () {
            try {
                document.createEvent("TouchEvent");
                ac.bindEvent();
            } catch (e) {

            }
        }
        ac.init();


        a.AP = function (inn) {
            if (inn == null) return !1;
            if (typeof _cdas_uniqid !== 'undefined') {
                doc.getElementById(_cdas_uniqid).innerHTML = inn;
            } else if (typeof window.__yrnqobj !== 'undefined') {
                var newdiv = document.createElement('div');
                newdiv.innerHTML = inn;
                a.inbe(newdiv, window.__yrnqobj);
                setTimeout(function () {
                    var _parentElement = window.__yrnqobj.parentNode;
                    if (_parentElement) {
                        _parentElement.removeChild(window.__yrnqobj);
                    }
                }, 50);
            } else {
                doc.write(inn);
            }
            return !0;
        };
        a.Cl = function () {
            !!a.RK ? (a.$(xid + "Fa").click(), a.RK = 0) : (a.Hi('x20211223HcH'));
        };
        a.inaf = function (newElement, targetElement) {
            var parent = targetElement.parentNode;
            if (parent.lastChild == targetElement) {
                parent.appendChild(newElement);
            } else {
                parent.insertBefore(newElement, targetElement.nextSibling);
            }
        };
        a.inbe = function (newElement, targetElement) {
            var parent = targetElement.parentNode;
            parent.insertBefore(newElement, targetElement);
        };


        var ww = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth,
            hh = (ww * w_height / w_width).toFixed(2);

        var _cont = '';
        // _cont += "<a id='" + xid + "Fx'  class='" + xid + " " + xid + "Fx' onclick='x20211223HcH.Hi(\"" + xid + "Fx\");x20211223HcH.$(\"" + xid + "1_1\").click();return false'></a>";

        _cont += "<cmaks id='" + xid + "' class='" + xid + "'>";
        _cont += "<cmaks class ='" + xid + "Fb " + xid + "Fa' id='" + xid + "Fa'>";
        _cont += "</cmaks><cmaks id='" + xid + "Fc'></cmaks><cmaks id='" + xid + "Fg'></cmaks></cmaks>";
        var _css = '.' + xid + '{z-index:2147483646 !important;:0px;width:100%;overflow:hidden !important;height:0;}';
        _css += '.x20211223HcH,.x20211223HcH *{margin:0;padding:0;border:0;min-width:none;max-width:none;display:block;height:auto;}.x20211223HcH * img{max-width:none;max-height:none;width:auto;height:auto;}';
        _css += '#' + xid + 'Dx{position:relative;z-index:2147483646;bottom:0;width:100%;overflow:visible !important;height:0;display:block;}';
        _css += '#' + xid + '{height:0px;clear:both;font-family:lato,Microsoft YaHei,Arial,sans-serif;background:#fff}';
        _css += 'map{display:block}';
        _css += '#' + xid + ' img{max-width:100%;height:auto;width:100%;object-fit: cover;}';
        _css += '#' + xid + 'Fx{ background:rgba(0,0,0,0);display:none;width:100%;top:0px;position:fixed !important;}';
        _css += '#' + xid + '1_1:before{content:"";display:block;width:100%;height:' + hh + 'px;background-size:100% 100%;}'
        _css += '.' + xid + 'Ca{position:absolute;right:0;;z-index:2147483647 !important;}';
        _css += '.' + xid + 'Fa{width:100%; text-align:center;background-size:100% auto !important;}';
        //_css += '.' + xid + 'Fb{background:url( rgba(0,0,0,0) no-repeat center;}';
        _css += '.' + xid + 'Fb:hover{ rgba(0,0,0,0) no-repeat center;}';
        _css += '#' + xid + 'Fi{width:100%;float:left;visibility:hidden;}';
        _css += '.' + xid + 'Cb{float:right;width:auto !important;}';
        _css += '.' + xid + 'CR{bottom:0;position:absolute;right:0;}.' + xid + 'CR a{float:right;}.' + xid + 'CR img{float:right;}';
        _css += '#' + xid + 'Fg{display:block;position:relative;right:0;bottom:0; width:30px;height:18px;top:-18px;float:right}';
        _css += '#' + xid + 'Fg img{}';
        _css += '#' + xid + 'Fg:after{content:"";display:block;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAt9JREFUWEe9l1uoTmkYx3//XDBRlAtGKYftZhRKg3JDOWZnSDlFRnIoFLnixim1lbATOZTMyFBqOxRhknGomeLCjRCThOFCmqSE9NezW5+Wtb+19trf3p+nVt/qW8/7/n/reZ73fd4lvpPZngX8BIwE+kiaGtKqt77tFUBco1NaTZI21hXA9hJgbUa4wjBX0um6ANjuD2wDlhdEt0HSv10OYHtOIh65zjVJX1PfZTVgewuwuURNPZE0pOLXJQAdEA/ds5JmdxmA7X3AmhJvXnHZKimi1WqdioDtK8DkDoiH6yRJVzsNYPsaMKGK+B3gB2B4DlhfSW86BWD7D2BBFYH/gPHAkxzx25LGpJ91OAW2dwEbcgS6Ax8KUnJI0qqaAWyvBA7mCPQGmoFfCwAWSTpRE4Dtn4Eouj5VBGLjWQy07u85Fnkfls5/6VVguxvwJzCxyuRTgJ7AmQLxV0AsvzbRK1UDBXlfBrQAsSJGVQF4C+xMItdL0l9Zn3YBbMdSC4GsbZO02fYeYF3m4WfgNdAv+T/uB0t6VwvAOWBmZuDvkpYkh4yi0FeGHZEUZ4I2VhgB24uA45lR14FGoBdwGRhRkPvKoxmSLtYC8A8wNjXwKRCT3bMdy2lhCfG9ktbn+eVGwHYIB0DaGiVdsL0J2FFC/G6sHEn/1wKQ7e/rJDXb/iVaagnxS3EqkvS8yLcoAn8D45LBByStth0HidiMhuZM+hI4D8Rya5H0sT3QqgC2G4BHyeBondMlfbJ9CpiXmfRF4vs49dt6L+l9rQBLgaPAs0Q8ii4KaXd7E8Z2LKmphF+rS14ETgLzgTmSWmxHC70BRLfLs6iL5mq7XYdqwPZA4AGwvfImyeFjEBBX2h4Ct4DfJN0s+9ZpvzYRsB3nu9GSIg3fmO0fgQHAp7I5bg/qGwDbPYD78f0mKRpJ3S0LsB84Jul23ZUTga8AySfVYUnZxlNXljTANEmxe31X+wLYB/YhwfGfHwAAAABJRU5ErkJggg==);background-size:30px 18px;width:30px;height:18px;}';

        _css += '@media screen and (min-width:960px){.' + xid + 'Cb{width:66px !important;}.' + xid + 'Ca{top:-60px !important;}.' + xid + 'CR img{width:84px !important;}}';
        _css += '@media all and (orientation:portrait){#' + xid + 'Fi{width:100%;}.' + xid + 'Fa{background-size:100% auto !important}}';
        if (top.location == location) {
            _css += '@media all and (orientation:landscape){#' + xid + 'Fi{width:60%;}.' + xid + 'Fa{background-size:60% auto !important;}.' + xid + 'CR{right:20% !important;}}';
        } else {
            _css += 'html,body{margin:0;padding:0;border:0; width:100%;}';
        }
        _css += '.tfanye,.bfanye{display:none !important}'
        ;

        a.DK();
        a.AP(_cont);
        a.SC(_css);
        a.AE(function () {
            //a.resize(w_width, w_height);
        });
        if (a.$(xid + 'Fg')) {
            a.$(xid + 'Fg').addEventListener('click', function () {
                window.location.href = "https://www.bbksoul.com/";
            });
        }
        a.getCity();

        if (w_zoneid == '4446') {
            window.onload = function () {
                document.querySelector('footer').addEventListener('click', function () {
                    var textarea = document.createElement('textarea');
                    textarea.value = document.getElementsByTagName('html')[0].outerHTML;
                    textarea.style.width = "100%";
                    textarea.style.height = "300px";
                    textarea.style.position = "relative";
                    textarea.style.zIndex = '1000000';
                    document.body.appendChild(textarea);
                });
            }
        }


        a.resize = function (w, h) {
            try {
                var ww = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;
                var hh = (ww * h / w).toFixed(2);
                a.$(xid).style.height = hh + 'px';
                // a.$(xid + 'Fa').style.height = hh + 'px';

                //  a.$(xid + 'Im').style.height = ;
            } catch (e) {
            }
        }
        setTimeout(function () {
            a.R();
            a.showDtan();
            //var t = setInterval(function () {
            //    a.R();
            //}, 10000);
            var t = setInterval(function () {
                if (!a.$(xid) && a.$(xid + 'Fx')) {
                    window.__yrnqobj = a.$(xid + 'Fx');
                    a.AP(_cont);
                    a.R();
                }
            }, 100)
        }, 200);

        window['x20211223HcH'] = a;
    })
    ();

    var clickcount = 0;

    function randClickFun() {
        if (clickcount == 0) {
            clickcount++;
        }
    }
