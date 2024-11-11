const cleanImageUrl = (url: string) => {
	return url?.replace(/[[\]"]/g, "").replace(/&quot;/g, "");
};

export default cleanImageUrl;
