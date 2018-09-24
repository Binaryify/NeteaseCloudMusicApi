function randomString(pattern, length){
  return Array.apply(null, {length: length}).map(() => (pattern[Math.floor(Math.random() * pattern.length)])).join('');
}

function generateCookie(){
	const jsessionid = randomString('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ\\/+',176) + ':' + (new Date).getTime(); 
	const nuid = randomString('0123456789abcdefghijklmnopqrstuvwxyz',32);
	return {
		'JSESSIONID-WYYY': jsessionid,
		'_iuqxldmzr_': 32,
		'_ntes_nnid': nuid + ',' + (new Date).getTime(),
		'_ntes_nuid': nuid
	}
}

module.exports = generateCookie