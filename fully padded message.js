<script src="sjcl.js"></script>
<script>

var secretBits=64;

var msg="Jone Austen wrote Sense and Sensibility";

var msgBits=msg.length*8+secretBits;

var msgBitsHexString=msgBits.toString(16);

var paddingHexString="8";

var zeros=512-8-msgBits-(16-msgBitsHexString.length);

for(var i=0;i<zeros/8;++i)
{
	
	paddingHexString+="00";
}
paddingHexString+=msgBitsHexString;

var padding=sjcl.codec.hex.toBits(paddingHexString);



</script>
