<script scr="sjcl.js"></script>
<script src="sha1.js"></scirpt>
<script>

var msg="Jaune Austen wrtoe Sense and Sensibility";

//generated by SHA-1 
var hash="f168dbe422860660509801146c137aee116cb5b8";

var mac=sjcl.codec.hex.toBits(hash);

sjcl.hash.sha1.prototype._init=mac;

//creates new SHA object

var s=new sjcl.hash.sha1();

//beceause SHA-1 operates on 512  bit blocks
s+=512;

s.update("and Rebecca");
var newMAC=s.finalize();

var hex=sjcl.codec.hex.fromBits(newMAC);


</scirpt>