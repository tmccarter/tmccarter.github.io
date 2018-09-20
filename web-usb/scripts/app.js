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
		const devices = navigator.usb
			.getDevices()
			.then(devices => {
				console.log(devices);
				devices.map(device => {
					console.log(`VendorId: ${device.vendorId}`);
					console.log(`ProuctId: ${device.productId}`);
					console.log(`ManufacturerName: ${device.manufacturerName}`);
					console.log(`ProductName: ${device.productName}`);
					console.log('------------------------------');
				});
			})
			.catch(err => {
				console.error(`ERROR: ${err}`);
			});
	}
})();
