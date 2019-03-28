<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\mosishall.github.io\assets\css\APlayer.min.css"><script src="\mosishall.github.io\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>String.prototype.render = function (context) {
    var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;

    return this.replace(tokenReg, function (word, slash1, token, slash2) {
        if (slash1 || slash2) {  
            return word.replace(&apos;\\&apos;, &apos;&apos;);
        }

        var variables = token.replace(/\s/g, &apos;&apos;).split(&apos;.&apos;);
        var currentObject = context;
        var i, length, variable;

        for (i = 0, length = variables.length; i &lt; length; ++i) {
            variable = variables[i];
            currentObject = currentObject[variable];
            if (currentObject === undefined || currentObject === null) return &apos;&apos;;
        }
        return currentObject;
    });
};

var re = /x/;
console.log(re);
re.toString = function() {
    showMessage(&apos;&#x54C8;&#x54C8;&#xFF0C;&#x4F60;&#x6253;&#x5F00;&#x4E86;&#x63A7;&#x5236;&#x53F0;&#xFF0C;&#x662F;&#x60F3;&#x8981;&#x770B;&#x770B;&#x6211;&#x7684;&#x79D8;&#x5BC6;&#x5417;&#xFF1F;&apos;, 5000, true);
    return &apos;&apos;;
};

$(document).on(&apos;copy&apos;, function (){
    showMessage(&apos;&#x4F60;&#x90FD;&#x590D;&#x5236;&#x4E86;&#x4E9B;&#x4EC0;&#x4E48;&#x5440;&#xFF0C;&#x8F6C;&#x8F7D;&#x8981;&#x8BB0;&#x5F97;&#x52A0;&#x4E0A;&#x51FA;&#x5904;&#x54E6;&apos;, 5000, true);
});

$(&apos;.waifu-tool .fui-home&apos;).click(function (){
    //window.location = &apos;https://www.fghrsh.net/&apos;;
    window.location = window.location.protocol+&apos;//&apos;+window.location.hostname+&apos;/&apos;
});

$(&apos;.waifu-tool .fui-eye&apos;).click(function (){
    loadOtherModel();
});

$(&apos;.waifu-tool .fui-chat&apos;).click(function (){
    showHitokoto();
});

$(&apos;.waifu-tool .fui-user&apos;).click(function (){
    loadRandModel();
});

$(&apos;.waifu-tool .fui-info-circle&apos;).click(function (){
    //window.open(&apos;https://imjad.cn/archives/lab/add-dynamic-poster-girl-with-live2d-to-your-blog-02&apos;);
    window.open(&apos;https://www.fghrsh.net/post/123.html&apos;);
});

$(&apos;.waifu-tool .fui-cross&apos;).click(function (){
    sessionStorage.setItem(&apos;waifu-dsiplay&apos;, &apos;none&apos;);
    showMessage(&apos;&#x613F;&#x4F60;&#x6709;&#x4E00;&#x5929;&#x80FD;&#x4E0E;&#x91CD;&#x8981;&#x7684;&#x4EBA;&#x91CD;&#x9022;&apos;, 1300, true);
    window.setTimeout(function() {$(&apos;.waifu&apos;).hide();}, 1300);
});

$(&apos;.waifu-tool .fui-photo&apos;).click(function (){
    showMessage(&apos;&#x7167;&#x597D;&#x4E86;&#x561B;&#xFF0C;&#x662F;&#x4E0D;&#x662F;&#x5F88;&#x53EF;&#x7231;&#x5462;&#xFF1F;&apos;, 5000, true);
    window.Live2D.captureName = &apos;Pio.png&apos;;
    window.Live2D.captureFrame = true;
});

(function (){
    var text;
    //var SiteIndexUrl = &apos;https://www.fghrsh.net/&apos;;  // &#x624B;&#x52A8;&#x6307;&#x5B9A;&#x4E3B;&#x9875;
    var SiteIndexUrl = window.location.protocol+&apos;//&apos;+window.location.hostname+&apos;/&apos;;  // &#x81EA;&#x52A8;&#x83B7;&#x53D6;&#x4E3B;&#x9875;
    
    if (window.location.href == SiteIndexUrl) {      // &#x5982;&#x679C;&#x662F;&#x4E3B;&#x9875;
        var now = (new Date()).getHours();
        if (now &gt; 23 || now &lt;= 5) { text=&quot;&#x4F60;&#x662F;&#x591C;&#x732B;&#x5B50;&#x5440;&#xFF1F;&#x8FD9;&#x4E48;&#x665A;&#x8FD8;&#x4E0D;&#x7761;&#x89C9;&#xFF0C;&#x660E;&#x5929;&#x8D77;&#x7684;&#x6765;&#x561B;&quot; ; } else if (now&gt; 5 &amp;&amp; now &lt;= 7) { text=&quot;&#x65E9;&#x4E0A;&#x597D;&#xFF01;&#x4E00;&#x65E5;&#x4E4B;&#x8BA1;&#x5728;&#x4E8E;&#x6668;&#xFF0C;&#x7F8E;&#x597D;&#x7684;&#x4E00;&#x5929;&#x5C31;&#x8981;&#x5F00;&#x59CB;&#x4E86;&quot; ; } else if (now&gt; 7 &amp;&amp; now &lt;= 11) { text=&quot;&#x4E0A;&#x5348;&#x597D;&#xFF01;&#x5DE5;&#x4F5C;&#x987A;&#x5229;&#x561B;&#xFF0C;&#x4E0D;&#x8981;&#x4E45;&#x5750;&#xFF0C;&#x591A;&#x8D77;&#x6765;&#x8D70;&#x52A8;&#x8D70;&#x52A8;&#x54E6;&#xFF01;&quot; ; } else if (now&gt; 11 &amp;&amp; now &lt;= 14) { text=&quot;&#x4E2D;&#x5348;&#x4E86;&#xFF0C;&#x5DE5;&#x4F5C;&#x4E86;&#x4E00;&#x4E2A;&#x4E0A;&#x5348;&#xFF0C;&#x73B0;&#x5728;&#x662F;&#x5348;&#x9910;&#x65F6;&#x95F4;&#xFF01;&quot; ; } else if (now&gt; 14 &amp;&amp; now &lt;= 17) { text=&quot;&#x5348;&#x540E;&#x5F88;&#x5BB9;&#x6613;&#x72AF;&#x56F0;&#x5462;&#xFF0C;&#x4ECA;&#x5929;&#x7684;&#x8FD0;&#x52A8;&#x76EE;&#x6807;&#x5B8C;&#x6210;&#x4E86;&#x5417;&#xFF1F;&quot; ; } else if (now&gt; 17 &amp;&amp; now &lt;= 19) { text=&quot;&#x508D;&#x665A;&#x4E86;&#xFF01;&#x7A97;&#x5916;&#x5915;&#x9633;&#x7684;&#x666F;&#x8272;&#x5F88;&#x7F8E;&#x4E3D;&#x5462;&#xFF0C;&#x6700;&#x7F8E;&#x4E0D;&#x8FC7;&#x5915;&#x9633;&#x7EA2;~&quot; ; } else if (now&gt; 19 &amp;&amp; now &lt;= 21) { text=&quot;&#x665A;&#x4E0A;&#x597D;&#xFF0C;&#x4ECA;&#x5929;&#x8FC7;&#x5F97;&#x600E;&#x4E48;&#x6837;&#xFF1F;&quot; ; } else if (now&gt; 21 &amp;&amp; now &lt;= 23) { text=&quot;&#x5DF2;&#x7ECF;&#x8FD9;&#x4E48;&#x665A;&#x4E86;&#x5440;&#xFF0C;&#x65E9;&#x70B9;&#x4F11;&#x606F;&#x5427;&#xFF0C;&#x665A;&#x5B89;~&quot; ; } else if(document.referrer !=&quot;=&quot; &apos;&apos;){ var referrer=&quot;document.createElement(&apos;a&apos;);&quot; referrer.href=&quot;document.referrer;&quot; domain=&quot;referrer.hostname.split(&apos;.&apos;)[1];&quot; if (window.location.hostname=&quot;=&quot; referrer.hostname) + document.title.split(&apos; - &apos;)[0] &apos;&#x300F;&lt; span&gt;&apos;;
            } else if (domain == &apos;baidu&apos;) {
                text = &apos;Hello! &#x6765;&#x81EA; &#x767E;&#x5EA6;&#x641C;&#x7D22; &#x7684;&#x670B;&#x53CB;<br>&#x4F60;&#x662F;&#x641C;&#x7D22; <span style="color:#0099cc;">&apos; + referrer.search.split(&apos;&amp;wd=&apos;)[1].split(&apos;&amp;&apos;)[0] + &apos;</span> &#x627E;&#x5230;&#x7684;&#x6211;&#x5417;&#xFF1F;&apos;;
            } else if (domain == &apos;so&apos;) {
                text = &apos;Hello! &#x6765;&#x81EA; 360&#x641C;&#x7D22; &#x7684;&#x670B;&#x53CB;<br>&#x4F60;&#x662F;&#x641C;&#x7D22; <span style="color:#0099cc;">&apos; + referrer.search.split(&apos;&amp;q=&apos;)[1].split(&apos;&amp;&apos;)[0] + &apos;</span> &#x627E;&#x5230;&#x7684;&#x6211;&#x5417;&#xFF1F;&apos;;
            } else if (domain == &apos;google&apos;) {
                text = &apos;Hello! &#x6765;&#x81EA; &#x8C37;&#x6B4C;&#x641C;&#x7D22; &#x7684;&#x670B;&#x53CB;<br>&#x6B22;&#x8FCE;&#x9605;&#x8BFB;<span style="color:#0099cc;">&#x300E;&apos; + document.title.split(&apos; - &apos;)[0] + &apos;&#x300F;</span>&apos;;
            } else {
                text = &apos;Hello! &#x6765;&#x81EA; <span style="color:#0099cc;">&apos; + referrer.hostname + &apos;</span> &#x7684;&#x670B;&#x53CB;&apos;;
            }
        } else {
            text = &apos;&#x6B22;&#x8FCE;&#x9605;&#x8BFB;<span style="color:#0099cc;">&#x300E;&apos; + document.title.split(&apos; - &apos;)[0] + &apos;&#x300F;</span>&apos;;
        }
    }
    showMessage(text, 6000);
})();

//window.hitokotoTimer = window.setInterval(showHitokoto,30000);
/* &#x68C0;&#x6D4B;&#x7528;&#x6237;&#x6D3B;&#x52A8;&#x72B6;&#x6001;&#xFF0C;&#x5E76;&#x5728;&#x7A7A;&#x95F2;&#x65F6; &#x5B9A;&#x65F6;&#x663E;&#x793A;&#x4E00;&#x8A00; */
var getActed = false;
window.hitokotoTimer = 0;
var hitokotoInterval = false;

$(document).mousemove(function(e){getActed = true;}).keydown(function(){getActed = true;});
setInterval(function() { if (!getActed) ifActed(); else elseActed(); }, 1000);

function ifActed() {
    if (!hitokotoInterval) {
        hitokotoInterval = true;
        hitokotoTimer = window.setInterval(showHitokoto, 30000);
    }
}

function elseActed() {
    getActed = hitokotoInterval = false;
    window.clearInterval(hitokotoTimer);
}

function showHitokoto(){
	/* &#x589E;&#x52A0; hitokoto.cn API */
    $.getJSON(&apos;https://v1.hitokoto.cn&apos;,function(result){
        var text = &apos;&#x8FD9;&#x53E5;&#x4E00;&#x8A00;&#x6765;&#x81EA; <span style="color:#0099cc;">&#x300E;{source}&#x300F;</span>&#xFF0C;&#x662F; <span style="color:#0099cc;">{creator}</span> &#x5728; hitokoto.cn &#x6295;&#x7A3F;&#x7684;&#x3002;&apos;;
        text = text.render({source: result.from, creator: result.creator});
        showMessage(result.hitokoto, 5000);
        window.setTimeout(function() {showMessage(text, 3000);}, 5000);
    });
	/*
	$.getJSON(&apos;https://api.fghrsh.net/hitokoto/rand/?encode=jsc&amp;uid=3335&apos;,function(result){
        var text = &apos;&#x8FD9;&#x53E5;&#x4E00;&#x8A00;&#x51FA;&#x5904;&#x662F; <span style="color:#0099cc;">&#x300E;{source}&#x300F;</span>&#xFF0C;&#x662F; <span style="color:#0099cc;">FGHRSH</span> &#x5728; {date} &#x6536;&#x85CF;&#x7684;&#xFF01;&apos;;
        text = text.render({source: result.source, date: result.date});
        showMessage(result.hitokoto, 5000);
        window.setTimeout(function() {showMessage(text, 3000);}, 5000);
    });
	*/
}

function showMessage(text, timeout, flag){
    if(flag || sessionStorage.getItem(&apos;waifu-text&apos;) === &apos;&apos; || sessionStorage.getItem(&apos;waifu-text&apos;) === null){
        if(Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1)-1];
        //console.log(text);
        
        if(flag) sessionStorage.setItem(&apos;waifu-text&apos;, text);
        
        $(&apos;.waifu-tips&apos;).stop();
        $(&apos;.waifu-tips&apos;).html(text).fadeTo(200, 1);
        if (timeout === undefined) timeout = 5000;
        hideMessage(timeout);
    }
}

function hideMessage(timeout){
    $(&apos;.waifu-tips&apos;).stop().css(&apos;opacity&apos;,1);
    if (timeout === undefined) timeout = 5000;
    window.setTimeout(function() {sessionStorage.removeItem(&apos;waifu-text&apos;)}, timeout);
    $(&apos;.waifu-tips&apos;).delay(timeout).fadeTo(200, 0);
}

function initModel(waifuPath){
    
    if (waifuPath === undefined) waifuPath = &apos;&apos;;
    var modelId = localStorage.getItem(&apos;modelId&apos;);
    var modelTexturesId = localStorage.getItem(&apos;modelTexturesId&apos;);
    
    if (modelId == null) {
        
        /* &#x9996;&#x6B21;&#x8BBF;&#x95EE;&#x52A0;&#x8F7D; &#x6307;&#x5B9A;&#x6A21;&#x578B; &#x7684; &#x6307;&#x5B9A;&#x6750;&#x8D28; */
        
        var modelId = 1;            // &#x6A21;&#x578B; ID
        var modelTexturesId = 53    // &#x6750;&#x8D28; ID
        
    } loadModel(modelId, modelTexturesId);
	
	$.ajax({
        cache: true,
        url: waifuPath+&apos;waifu-tips.json&apos;,
        dataType: &quot;json&quot;,
        success: function (result){
            $.each(result.mouseover, function (index, tips){
                $(document).on(&quot;mouseover&quot;, tips.selector, function (){
                    var text = tips.text;
                    if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
                    text = text.render({text: $(this).text()});
                    showMessage(text, 3000);
                });
            });
            $.each(result.click, function (index, tips){
                $(document).on(&quot;click&quot;, tips.selector, function (){
                    var text = tips.text;
                    if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
                    text = text.render({text: $(this).text()});
                    showMessage(text, 3000, true);
                });
            });
            $.each(result.seasons, function (index, tips){
                var now = new Date();
                var after = tips.date.split(&apos;-&apos;)[0];
                var before = tips.date.split(&apos;-&apos;)[1] || after;
                
                if((after.split(&apos;/&apos;)[0] <!--=--><!--=--><!--=--><!--=--><!--=--><!--=--><!--=--><!--=--><script>
        document.querySelectorAll('.github-emoji')
          .forEach(el => {
            if (!el.dataset.src) { return; }
            const img = document.createElement('img');
            img.style = 'display:none !important;';
            img.src = el.dataset.src;
            img.addEventListener('error', () => {
              img.remove();
              el.style.color = 'inherit';
              el.style.backgroundImage = 'none';
              el.style.background = 'none';
            });
            img.addEventListener('load', () => {
              img.remove();
            });
            document.body.appendChild(img);
          });
      </script>