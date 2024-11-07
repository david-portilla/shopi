const cleanImageUrl = (url) => {
	return url?.replace(/[[\]"]/g, "").replace(/&quot;/g, "");
};

export default cleanImageUrl;
