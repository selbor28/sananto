
class listfinder {
    constructor(sBlock, eBlock, address) {
        this.sBlock = int(sBlock);
        this.eBlock = int(eBlock);
        this.address = address;
    }
}

function getlisting(sBlock, eBlock){
    var sBlock = document.getElementById("sBlock").value;
    var eBlock = document.getElementById("eBlock").value;
    let address = ""
    for (let i = sBlock; i < eBlock; i++){  
   address += i + " " + document.getElementById("address").value + "</br>";  
    }
    document.getElementById("listings").innerHTML = address; 
}

class saListing { 
    constructor(listid, name, address, city, state) { 
    this.listid() = listid;
    this.name() = name;
    this.address() = address;
    this.city() = "San Antonio";
    this.state() = "Texas"
    }
}