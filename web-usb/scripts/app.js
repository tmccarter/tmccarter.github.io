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
					console.log(`ManufacturerName: ${device.manufacturerName}`);
					console.log(`ProductName: ${device.productName}`);
					console.log(`VendorId: ${device.vendorId}`);
					console.log(`ProuctId: ${device.productId}`);
					console.log('------------------------------');
				});
			})
			.catch(err => {
				console.error(`ERROR: ${err}`);
			});
	}

	let pcsc = require('pcsclite');

	let pcsc = pcsc();

	console.log(`pcsc: ${pcsc}`);

	pcsc.on('reader', reader => {
		console.log(`new reader detected: ${reader.name}`);
	});
})();
