(global => {
	const devices = navigator.usb.getDevices().then(devices => {
		console.log(devices);
		devices.map(device => {
			console.log(device.vendorId, device.productId, device.productName);
		});
	});
	console.log(devices);
})(window);
