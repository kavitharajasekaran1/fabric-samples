let multichain = require("multichain-node")({
    port:   5747,
    host: '192.168.1.45',
    user: "multichainrpc",
    pass: "HZwG5H5Ak6z2ZgqyQaKh7cdX72pzP4ZtLAw6VyVCRxqG"
});


function readFromStream(key){

	multichain.listStreamKeyItems(
		{
			stream:"stream1",
			key:key,
			verbose:true,
			count: 10,
			start:0
		}, (err,res)=> {
			data = res[res.length-1].data;
			stringval = Buffer.from(data, 'hex').toString();
			console.log(stringval);
		}
	);
 }
 
 
 readFromStream("mykey")