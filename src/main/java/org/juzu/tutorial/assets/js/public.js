 var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-146052-10']);
        _gaq.push(['_trackPageview']);
        (function() {
            var ga = document.createElement('script');
            ga.type = 'text/javascript';
            ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
        })();
function getPar(par){
	//��ȡ��ǰURL
	var local_url = document.location.href; 
	//��ȡҪȡ�õ�get����λ��
	var get = local_url.indexOf(par +"=");
	if(get == -1){
		return false;   
	}   
	//��ȡ�ַ���
	var get_par = local_url.slice(par.length + get + 1);    
	//�жϽ�ȡ����ַ����Ƿ�������get����
	var nextPar = get_par.indexOf("&");
	if(nextPar != -1){
		get_par = get_par.slice(0, nextPar);
	}
	
	return get_par;
}