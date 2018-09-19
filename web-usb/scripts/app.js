(() => {
	const requestDevicesLink = document.getElementById('requestDevices');
	requestDevicesLink.onclick = requestDevices;
	const getDevicesLink = document.getElementById('getDevices');
	getDevicesLink.onclick = getDevices;
	function requestDevices(e) {
		e.preventDefault();
		const device = navigator.usb
			.requestDevice({ filters: [] })
			.then(device => {
				console.log(device);
			})
			.catch(err => {
				console.error(`ERROR: ${err}`);
			});
	}
	function getDevices(e) {
		e.preventDefault();
		const devices = navigator.usb.getDevices().then(devices => {
			console.log(devices);
			devices.map(device => {
				console.log(device.vendorId, device.productId, device.productName);
			});
		});
	}
})();
