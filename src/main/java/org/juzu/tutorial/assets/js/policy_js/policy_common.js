/*��ȡurl��ַ*/
function get_url_base()
{
	var local_url = document.location.href;
	
	var get_index=local_url.indexOf("=");
	if(get_index !=-1)
	{
		local_url=local_url.substring(0,get_index);
	}
	
	var dir_index=local_url.lastIndexOf("/");
	if(dir_index !=-1)
	{
		local_url=local_url.substring(0,dir_index);
	}
	
	return local_url;
}

//��ò���
var par;
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