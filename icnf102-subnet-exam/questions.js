window.SUBQ = [
 {
  "set": "A",
  "marks": 5,
  "text": "A company is given the network block <b>192.168.50.0/24</b>. They require <b>4 subnets</b>, each with at least <b>50 hosts</b>. Calculate: (1) bits borrowed, (2) the new subnet mask in decimal, and (3) the number of hosts per subnet.",
  "fields": [
   {
    "l": "(1) Bits borrowed",
    "a": 2,
    "k": "int",
    "m": 1
   },
   {
    "l": "(2) New subnet mask",
    "a": "255.255.255.192",
    "k": "mask",
    "m": 2
   },
   {
    "l": "(3) Usable hosts per subnet",
    "a": 62,
    "k": "int",
    "m": 2
   }
  ],
  "steps": [
   "Write the given mask in binary. /24 = <code>11111111.11111111.11111111.00000000</code>",
   "Bits to borrow: smallest n where 2^n &ge; 4. <code>2^1 = 2 &nbsp;&middot;&nbsp; 2^2 = 4 &#10003;</code> &rarr; <b>borrow 2 bits</b>.",
   "New mask: turn 2 host bits into 1s &rarr; <code>11111111.11111111.11111111.<b>1</b><b>1</b>000000</code> = <b>/26</b>.",
   "Convert to decimal: the 4th octet has 2 ones = 128 + 64 = 192. Octets before it are 255, after it 0 &rarr; <b>255.255.255.192</b>.",
   "Hosts per subnet: host bits = 32 &minus; 26 = 6 &rarr; 2^6 &minus; 2 = <b>62</b> usable (64 addresses; the network and broadcast addresses can't be used).",
   "Check the hosts fit: each subnet has <b>62</b> usable hosts and the question needs 50 &rarr; 62 &ge; 50 &#10003;"
  ],
  "note": "Based on Q42 from the practice paper (the paper left out the hosts; your exam gives them).",
  "id": 1
 },
 {
  "set": "A",
  "marks": 5,
  "text": "A company is given the network block <b>192.168.1.0/24</b>. They require <b>6 subnets</b>, each with at least <b>25 hosts</b>. Calculate: (1) bits borrowed, (2) the new subnet mask in decimal, and (3) the number of hosts per subnet.",
  "fields": [
   {
    "l": "(1) Bits borrowed",
    "a": 3,
    "k": "int",
    "m": 1
   },
   {
    "l": "(2) New subnet mask",
    "a": "255.255.255.224",
    "k": "mask",
    "m": 2
   },
   {
    "l": "(3) Usable hosts per subnet",
    "a": 30,
    "k": "int",
    "m": 2
   }
  ],
  "steps": [
   "Write the given mask in binary. /24 = <code>11111111.11111111.11111111.00000000</code>",
   "Bits to borrow: smallest n where 2^n &ge; 6. <code>2^1 = 2 &nbsp;&middot;&nbsp; 2^2 = 4 &nbsp;&middot;&nbsp; 2^3 = 8 &#10003;</code> &rarr; <b>borrow 3 bits</b>.",
   "New mask: turn 3 host bits into 1s &rarr; <code>11111111.11111111.11111111.<b>1</b><b>1</b><b>1</b>00000</code> = <b>/27</b>.",
   "Convert to decimal: the 4th octet has 3 ones = 128 + 64 + 32 = 224. Octets before it are 255, after it 0 &rarr; <b>255.255.255.224</b>.",
   "Hosts per subnet: host bits = 32 &minus; 27 = 5 &rarr; 2^5 &minus; 2 = <b>30</b> usable (32 addresses; the network and broadcast addresses can't be used).",
   "Check the hosts fit: each subnet has <b>30</b> usable hosts and the question needs 25 &rarr; 30 &ge; 25 &#10003;"
  ],
  "note": null,
  "id": 2
 },
 {
  "set": "A",
  "marks": 5,
  "text": "A company is given the network block <b>192.168.100.0/24</b>. They require <b>12 subnets</b>, each with at least <b>10 hosts</b>. Calculate: (1) bits borrowed, (2) the new subnet mask in decimal, and (3) the number of hosts per subnet.",
  "fields": [
   {
    "l": "(1) Bits borrowed",
    "a": 4,
    "k": "int",
    "m": 1
   },
   {
    "l": "(2) New subnet mask",
    "a": "255.255.255.240",
    "k": "mask",
    "m": 2
   },
   {
    "l": "(3) Usable hosts per subnet",
    "a": 14,
    "k": "int",
    "m": 2
   }
  ],
  "steps": [
   "Write the given mask in binary. /24 = <code>11111111.11111111.11111111.00000000</code>",
   "Bits to borrow: smallest n where 2^n &ge; 12. <code>2^1 = 2 &nbsp;&middot;&nbsp; 2^2 = 4 &nbsp;&middot;&nbsp; 2^3 = 8 &nbsp;&middot;&nbsp; 2^4 = 16 &#10003;</code> &rarr; <b>borrow 4 bits</b>.",
   "New mask: turn 4 host bits into 1s &rarr; <code>11111111.11111111.11111111.<b>1</b><b>1</b><b>1</b><b>1</b>0000</code> = <b>/28</b>.",
   "Convert to decimal: the 4th octet has 4 ones = 128 + 64 + 32 + 16 = 240. Octets before it are 255, after it 0 &rarr; <b>255.255.255.240</b>.",
   "Hosts per subnet: host bits = 32 &minus; 28 = 4 &rarr; 2^4 &minus; 2 = <b>14</b> usable (16 addresses; the network and broadcast addresses can't be used).",
   "Check the hosts fit: each subnet has <b>14</b> usable hosts and the question needs 10 &rarr; 14 &ge; 10 &#10003;"
  ],
  "note": null,
  "id": 3
 },
 {
  "set": "A",
  "marks": 5,
  "text": "A company is given the network block <b>200.10.5.0/24</b>. They require <b>3 subnets</b>, each with at least <b>40 hosts</b>. Calculate: (1) bits borrowed, (2) the new subnet mask in decimal, and (3) the number of hosts per subnet.",
  "fields": [
   {
    "l": "(1) Bits borrowed",
    "a": 2,
    "k": "int",
    "m": 1
   },
   {
    "l": "(2) New subnet mask",
    "a": "255.255.255.192",
    "k": "mask",
    "m": 2
   },
   {
    "l": "(3) Usable hosts per subnet",
    "a": 62,
    "k": "int",
    "m": 2
   }
  ],
  "steps": [
   "Write the given mask in binary. /24 = <code>11111111.11111111.11111111.00000000</code>",
   "Bits to borrow: smallest n where 2^n &ge; 3. <code>2^1 = 2 &nbsp;&middot;&nbsp; 2^2 = 4 &#10003;</code> &rarr; <b>borrow 2 bits</b>.",
   "New mask: turn 2 host bits into 1s &rarr; <code>11111111.11111111.11111111.<b>1</b><b>1</b>000000</code> = <b>/26</b>.",
   "Convert to decimal: the 4th octet has 2 ones = 128 + 64 = 192. Octets before it are 255, after it 0 &rarr; <b>255.255.255.192</b>.",
   "Hosts per subnet: host bits = 32 &minus; 26 = 6 &rarr; 2^6 &minus; 2 = <b>62</b> usable (64 addresses; the network and broadcast addresses can't be used).",
   "Check the hosts fit: each subnet has <b>62</b> usable hosts and the question needs 40 &rarr; 62 &ge; 40 &#10003;"
  ],
  "note": null,
  "id": 4
 },
 {
  "set": "A",
  "marks": 5,
  "text": "A company is given the network block <b>192.168.10.0/24</b>. They require <b>30 subnets</b>, each with at least <b>5 hosts</b>. Calculate: (1) bits borrowed, (2) the new subnet mask in decimal, and (3) the number of hosts per subnet.",
  "fields": [
   {
    "l": "(1) Bits borrowed",
    "a": 5,
    "k": "int",
    "m": 1
   },
   {
    "l": "(2) New subnet mask",
    "a": "255.255.255.248",
    "k": "mask",
    "m": 2
   },
   {
    "l": "(3) Usable hosts per subnet",
    "a": 6,
    "k": "int",
    "m": 2
   }
  ],
  "steps": [
   "Write the given mask in binary. /24 = <code>11111111.11111111.11111111.00000000</code>",
   "Bits to borrow: smallest n where 2^n &ge; 30. <code>2^1 = 2 &nbsp;&middot;&nbsp; 2^2 = 4 &nbsp;&middot;&nbsp; 2^3 = 8 &nbsp;&middot;&nbsp; 2^4 = 16 &nbsp;&middot;&nbsp; 2^5 = 32 &#10003;</code> &rarr; <b>borrow 5 bits</b>.",
   "New mask: turn 5 host bits into 1s &rarr; <code>11111111.11111111.11111111.<b>1</b><b>1</b><b>1</b><b>1</b><b>1</b>000</code> = <b>/29</b>.",
   "Convert to decimal: the 4th octet has 5 ones = 128 + 64 + 32 + 16 + 8 = 248. Octets before it are 255, after it 0 &rarr; <b>255.255.255.248</b>.",
   "Hosts per subnet: host bits = 32 &minus; 29 = 3 &rarr; 2^3 &minus; 2 = <b>6</b> usable (8 addresses; the network and broadcast addresses can't be used).",
   "Check the hosts fit: each subnet has <b>6</b> usable hosts and the question needs 5 &rarr; 6 &ge; 5 &#10003;"
  ],
  "note": "Same network and count as the paper's MCQ Q4 (answer: 5 bits).",
  "id": 5
 },
 {
  "set": "A",
  "marks": 5,
  "text": "A company is given the network block <b>192.168.8.0/24</b>. They require <b>50 subnets</b>, each with at least <b>2 hosts</b>. Calculate: (1) bits borrowed, (2) the new subnet mask in decimal, and (3) the number of hosts per subnet.",
  "fields": [
   {
    "l": "(1) Bits borrowed",
    "a": 6,
    "k": "int",
    "m": 1
   },
   {
    "l": "(2) New subnet mask",
    "a": "255.255.255.252",
    "k": "mask",
    "m": 2
   },
   {
    "l": "(3) Usable hosts per subnet",
    "a": 2,
    "k": "int",
    "m": 2
   }
  ],
  "steps": [
   "Write the given mask in binary. /24 = <code>11111111.11111111.11111111.00000000</code>",
   "Bits to borrow: smallest n where 2^n &ge; 50. <code>2^1 = 2 &nbsp;&middot;&nbsp; 2^2 = 4 &nbsp;&middot;&nbsp; 2^3 = 8 &nbsp;&middot;&nbsp; 2^4 = 16 &nbsp;&middot;&nbsp; 2^5 = 32 &nbsp;&middot;&nbsp; 2^6 = 64 &#10003;</code> &rarr; <b>borrow 6 bits</b>.",
   "New mask: turn 6 host bits into 1s &rarr; <code>11111111.11111111.11111111.<b>1</b><b>1</b><b>1</b><b>1</b><b>1</b><b>1</b>00</code> = <b>/30</b>.",
   "Convert to decimal: the 4th octet has 6 ones = 128 + 64 + 32 + 16 + 8 + 4 = 252. Octets before it are 255, after it 0 &rarr; <b>255.255.255.252</b>.",
   "Hosts per subnet: host bits = 32 &minus; 30 = 2 &rarr; 2^2 &minus; 2 = <b>2</b> usable (4 addresses; the network and broadcast addresses can't be used).",
   "Check the hosts fit: each subnet has <b>2</b> usable hosts and the question needs 2 &rarr; 2 &ge; 2 &#10003;"
  ],
  "note": null,
  "id": 6
 },
 {
  "set": "B",
  "marks": 8,
  "text": "You must subnet <b>192.168.10.0/24</b> into <b>5 subnets</b> of equal size, each with at least <b>20 hosts</b>. Determine the number of bits borrowed, the new subnet mask (decimal and prefix), the number of subnets created, the usable hosts per subnet and the increment. Then give the network address, usable host range and broadcast address of the first three subnets and the last subnet.",
  "fields": [
   {
    "l": "Bits borrowed",
    "a": 3,
    "k": "int",
    "m": 1
   },
   {
    "l": "New mask (decimal)",
    "a": "255.255.255.224",
    "k": "mask",
    "m": 1
   },
   {
    "l": "New prefix",
    "a": 27,
    "k": "prefix",
    "m": 1
   },
   {
    "l": "Subnets created",
    "a": 8,
    "k": "int",
    "m": 1
   },
   {
    "l": "Usable hosts per subnet",
    "a": 30,
    "k": "int",
    "m": 1
   },
   {
    "l": "Increment",
    "a": 32,
    "k": "int",
    "m": 1
   },
   {
    "l": "2nd subnet network address",
    "a": "192.168.10.32",
    "k": "ip",
    "m": 1
   },
   {
    "l": "Broadcast of the 1st subnet",
    "a": "192.168.10.31",
    "k": "ip",
    "m": 1
   }
  ],
  "steps": [
   "Write the given mask in binary. /24 = <code>11111111.11111111.11111111.00000000</code>",
   "Bits to borrow: smallest n where 2^n &ge; 5. <code>2^1 = 2 &nbsp;&middot;&nbsp; 2^2 = 4 &nbsp;&middot;&nbsp; 2^3 = 8 &#10003;</code> &rarr; <b>borrow 3 bits</b>.",
   "New mask: turn 3 host bits into 1s &rarr; <code>11111111.11111111.11111111.<b>1</b><b>1</b><b>1</b>00000</code> = <b>/27</b>.",
   "Convert to decimal: the 4th octet has 3 ones = 128 + 64 + 32 = 224. Octets before it are 255, after it 0 &rarr; <b>255.255.255.224</b>.",
   "Increment: the last 1 is in the <b>4th octet</b>, which has 5 zeros left &rarr; 2^5 = <b>32</b>, added in the 4th octet.",
   "Hosts per subnet: host bits = 32 &minus; 27 = 5 &rarr; 2^5 &minus; 2 = <b>30</b> usable (32 addresses; the network and broadcast addresses can't be used).",
   "Subnets created: 2^3 = <b>8</b>.",
   "Check the hosts fit: each subnet has <b>30</b> usable hosts and the question needs 20 &rarr; 30 &ge; 20 &#10003;",
   "List the subnets: start at the given network and add the increment each time. Broadcast = next network &minus; 1; usable hosts are everything in between."
  ],
  "table": {
   "head": [
    "#",
    "Network",
    "First usable",
    "Last usable",
    "Broadcast"
   ],
   "rows": [
    [
     "1",
     "192.168.10.0/27",
     "192.168.10.1",
     "192.168.10.30",
     "192.168.10.31"
    ],
    [
     "2",
     "192.168.10.32/27",
     "192.168.10.33",
     "192.168.10.62",
     "192.168.10.63"
    ],
    [
     "3",
     "192.168.10.64/27",
     "192.168.10.65",
     "192.168.10.94",
     "192.168.10.95"
    ],
    [
     "8",
     "192.168.10.224/27",
     "192.168.10.225",
     "192.168.10.254",
     "192.168.10.255"
    ]
   ]
  },
  "id": 7
 },
 {
  "set": "B",
  "marks": 8,
  "text": "You must subnet <b>192.168.70.0/24</b> into <b>10 subnets</b> of equal size, each with at least <b>12 hosts</b>. Determine the number of bits borrowed, the new subnet mask (decimal and prefix), the number of subnets created, the usable hosts per subnet and the increment. Then give the network address, usable host range and broadcast address of the first three subnets and the last subnet.",
  "fields": [
   {
    "l": "Bits borrowed",
    "a": 4,
    "k": "int",
    "m": 1
   },
   {
    "l": "New mask (decimal)",
    "a": "255.255.255.240",
    "k": "mask",
    "m": 1
   },
   {
    "l": "New prefix",
    "a": 28,
    "k": "prefix",
    "m": 1
   },
   {
    "l": "Subnets created",
    "a": 16,
    "k": "int",
    "m": 1
   },
   {
    "l": "Usable hosts per subnet",
    "a": 14,
    "k": "int",
    "m": 1
   },
   {
    "l": "Increment",
    "a": 16,
    "k": "int",
    "m": 1
   },
   {
    "l": "2nd subnet network address",
    "a": "192.168.70.16",
    "k": "ip",
    "m": 1
   },
   {
    "l": "Broadcast of the 1st subnet",
    "a": "192.168.70.15",
    "k": "ip",
    "m": 1
   }
  ],
  "steps": [
   "Write the given mask in binary. /24 = <code>11111111.11111111.11111111.00000000</code>",
   "Bits to borrow: smallest n where 2^n &ge; 10. <code>2^1 = 2 &nbsp;&middot;&nbsp; 2^2 = 4 &nbsp;&middot;&nbsp; 2^3 = 8 &nbsp;&middot;&nbsp; 2^4 = 16 &#10003;</code> &rarr; <b>borrow 4 bits</b>.",
   "New mask: turn 4 host bits into 1s &rarr; <code>11111111.11111111.11111111.<b>1</b><b>1</b><b>1</b><b>1</b>0000</code> = <b>/28</b>.",
   "Convert to decimal: the 4th octet has 4 ones = 128 + 64 + 32 + 16 = 240. Octets before it are 255, after it 0 &rarr; <b>255.255.255.240</b>.",
   "Increment: the last 1 is in the <b>4th octet</b>, which has 4 zeros left &rarr; 2^4 = <b>16</b>, added in the 4th octet.",
   "Hosts per subnet: host bits = 32 &minus; 28 = 4 &rarr; 2^4 &minus; 2 = <b>14</b> usable (16 addresses; the network and broadcast addresses can't be used).",
   "Subnets created: 2^4 = <b>16</b>.",
   "Check the hosts fit: each subnet has <b>14</b> usable hosts and the question needs 12 &rarr; 14 &ge; 12 &#10003;",
   "List the subnets: start at the given network and add the increment each time. Broadcast = next network &minus; 1; usable hosts are everything in between."
  ],
  "table": {
   "head": [
    "#",
    "Network",
    "First usable",
    "Last usable",
    "Broadcast"
   ],
   "rows": [
    [
     "1",
     "192.168.70.0/28",
     "192.168.70.1",
     "192.168.70.14",
     "192.168.70.15"
    ],
    [
     "2",
     "192.168.70.16/28",
     "192.168.70.17",
     "192.168.70.30",
     "192.168.70.31"
    ],
    [
     "3",
     "192.168.70.32/28",
     "192.168.70.33",
     "192.168.70.46",
     "192.168.70.47"
    ],
    [
     "16",
     "192.168.70.240/28",
     "192.168.70.241",
     "192.168.70.254",
     "192.168.70.255"
    ]
   ]
  },
  "id": 8
 },
 {
  "set": "B",
  "marks": 8,
  "text": "You must subnet <b>172.16.0.0/16</b> into <b>10 subnets</b> of equal size, each with at least <b>3,000 hosts</b>. Determine the number of bits borrowed, the new subnet mask (decimal and prefix), the number of subnets created, the usable hosts per subnet and the increment. Then give the network address, usable host range and broadcast address of the first three subnets and the last subnet.",
  "fields": [
   {
    "l": "Bits borrowed",
    "a": 4,
    "k": "int",
    "m": 1
   },
   {
    "l": "New mask (decimal)",
    "a": "255.255.240.0",
    "k": "mask",
    "m": 1
   },
   {
    "l": "New prefix",
    "a": 20,
    "k": "prefix",
    "m": 1
   },
   {
    "l": "Subnets created",
    "a": 16,
    "k": "int",
    "m": 1
   },
   {
    "l": "Usable hosts per subnet",
    "a": 4094,
    "k": "int",
    "m": 1
   },
   {
    "l": "Increment",
    "a": 16,
    "k": "int",
    "m": 1
   },
   {
    "l": "2nd subnet network address",
    "a": "172.16.16.0",
    "k": "ip",
    "m": 1
   },
   {
    "l": "Broadcast of the 1st subnet",
    "a": "172.16.15.255",
    "k": "ip",
    "m": 1
   }
  ],
  "steps": [
   "Write the given mask in binary. /16 = <code>11111111.11111111.00000000.00000000</code>",
   "Bits to borrow: smallest n where 2^n &ge; 10. <code>2^1 = 2 &nbsp;&middot;&nbsp; 2^2 = 4 &nbsp;&middot;&nbsp; 2^3 = 8 &nbsp;&middot;&nbsp; 2^4 = 16 &#10003;</code> &rarr; <b>borrow 4 bits</b>.",
   "New mask: turn 4 host bits into 1s &rarr; <code>11111111.11111111.<b>1</b><b>1</b><b>1</b><b>1</b>0000.00000000</code> = <b>/20</b>.",
   "Convert to decimal: the 3rd octet has 4 ones = 128 + 64 + 32 + 16 = 240. Octets before it are 255, after it 0 &rarr; <b>255.255.240.0</b>.",
   "Increment: the last 1 is in the <b>3rd octet</b>, which has 4 zeros left &rarr; 2^4 = <b>16</b>, added in the 3rd octet.",
   "Hosts per subnet: host bits = 32 &minus; 20 = 12 &rarr; 2^12 &minus; 2 = <b>4094</b> usable (4096 addresses; the network and broadcast addresses can't be used).",
   "Subnets created: 2^4 = <b>16</b>.",
   "Check the hosts fit: each subnet has <b>4094</b> usable hosts and the question needs 3000 &rarr; 4094 &ge; 3000 &#10003;",
   "List the subnets: start at the given network and add the increment each time. Broadcast = next network &minus; 1; usable hosts are everything in between."
  ],
  "table": {
   "head": [
    "#",
    "Network",
    "First usable",
    "Last usable",
    "Broadcast"
   ],
   "rows": [
    [
     "1",
     "172.16.0.0/20",
     "172.16.0.1",
     "172.16.15.254",
     "172.16.15.255"
    ],
    [
     "2",
     "172.16.16.0/20",
     "172.16.16.1",
     "172.16.31.254",
     "172.16.31.255"
    ],
    [
     "3",
     "172.16.32.0/20",
     "172.16.32.1",
     "172.16.47.254",
     "172.16.47.255"
    ],
    [
     "16",
     "172.16.240.0/20",
     "172.16.240.1",
     "172.16.255.254",
     "172.16.255.255"
    ]
   ]
  },
  "id": 9
 },
 {
  "set": "B",
  "marks": 8,
  "text": "You must subnet <b>172.20.0.0/16</b> into <b>50 subnets</b> of equal size, each with at least <b>800 hosts</b>. Determine the number of bits borrowed, the new subnet mask (decimal and prefix), the number of subnets created, the usable hosts per subnet and the increment. Then give the network address, usable host range and broadcast address of the first three subnets and the last subnet.",
  "fields": [
   {
    "l": "Bits borrowed",
    "a": 6,
    "k": "int",
    "m": 1
   },
   {
    "l": "New mask (decimal)",
    "a": "255.255.252.0",
    "k": "mask",
    "m": 1
   },
   {
    "l": "New prefix",
    "a": 22,
    "k": "prefix",
    "m": 1
   },
   {
    "l": "Subnets created",
    "a": 64,
    "k": "int",
    "m": 1
   },
   {
    "l": "Usable hosts per subnet",
    "a": 1022,
    "k": "int",
    "m": 1
   },
   {
    "l": "Increment",
    "a": 4,
    "k": "int",
    "m": 1
   },
   {
    "l": "2nd subnet network address",
    "a": "172.20.4.0",
    "k": "ip",
    "m": 1
   },
   {
    "l": "Broadcast of the 1st subnet",
    "a": "172.20.3.255",
    "k": "ip",
    "m": 1
   }
  ],
  "steps": [
   "Write the given mask in binary. /16 = <code>11111111.11111111.00000000.00000000</code>",
   "Bits to borrow: smallest n where 2^n &ge; 50. <code>2^1 = 2 &nbsp;&middot;&nbsp; 2^2 = 4 &nbsp;&middot;&nbsp; 2^3 = 8 &nbsp;&middot;&nbsp; 2^4 = 16 &nbsp;&middot;&nbsp; 2^5 = 32 &nbsp;&middot;&nbsp; 2^6 = 64 &#10003;</code> &rarr; <b>borrow 6 bits</b>.",
   "New mask: turn 6 host bits into 1s &rarr; <code>11111111.11111111.<b>1</b><b>1</b><b>1</b><b>1</b><b>1</b><b>1</b>00.00000000</code> = <b>/22</b>.",
   "Convert to decimal: the 3rd octet has 6 ones = 128 + 64 + 32 + 16 + 8 + 4 = 252. Octets before it are 255, after it 0 &rarr; <b>255.255.252.0</b>.",
   "Increment: the last 1 is in the <b>3rd octet</b>, which has 2 zeros left &rarr; 2^2 = <b>4</b>, added in the 3rd octet.",
   "Hosts per subnet: host bits = 32 &minus; 22 = 10 &rarr; 2^10 &minus; 2 = <b>1022</b> usable (1024 addresses; the network and broadcast addresses can't be used).",
   "Subnets created: 2^6 = <b>64</b>.",
   "Check the hosts fit: each subnet has <b>1022</b> usable hosts and the question needs 800 &rarr; 1022 &ge; 800 &#10003;",
   "List the subnets: start at the given network and add the increment each time. Broadcast = next network &minus; 1; usable hosts are everything in between."
  ],
  "table": {
   "head": [
    "#",
    "Network",
    "First usable",
    "Last usable",
    "Broadcast"
   ],
   "rows": [
    [
     "1",
     "172.20.0.0/22",
     "172.20.0.1",
     "172.20.3.254",
     "172.20.3.255"
    ],
    [
     "2",
     "172.20.4.0/22",
     "172.20.4.1",
     "172.20.7.254",
     "172.20.7.255"
    ],
    [
     "3",
     "172.20.8.0/22",
     "172.20.8.1",
     "172.20.11.254",
     "172.20.11.255"
    ],
    [
     "64",
     "172.20.252.0/22",
     "172.20.252.1",
     "172.20.255.254",
     "172.20.255.255"
    ]
   ]
  },
  "id": 10
 },
 {
  "set": "B",
  "marks": 8,
  "text": "You must subnet <b>10.0.0.0/8</b> into <b>6 subnets</b> of equal size, each with at least <b>1,000,000 hosts</b>. Determine the number of bits borrowed, the new subnet mask (decimal and prefix), the number of subnets created, the usable hosts per subnet and the increment. Then give the network address, usable host range and broadcast address of the first three subnets and the last subnet.",
  "fields": [
   {
    "l": "Bits borrowed",
    "a": 3,
    "k": "int",
    "m": 1
   },
   {
    "l": "New mask (decimal)",
    "a": "255.224.0.0",
    "k": "mask",
    "m": 1
   },
   {
    "l": "New prefix",
    "a": 11,
    "k": "prefix",
    "m": 1
   },
   {
    "l": "Subnets created",
    "a": 8,
    "k": "int",
    "m": 1
   },
   {
    "l": "Usable hosts per subnet",
    "a": 2097150,
    "k": "int",
    "m": 1
   },
   {
    "l": "Increment",
    "a": 32,
    "k": "int",
    "m": 1
   },
   {
    "l": "2nd subnet network address",
    "a": "10.32.0.0",
    "k": "ip",
    "m": 1
   },
   {
    "l": "Broadcast of the 1st subnet",
    "a": "10.31.255.255",
    "k": "ip",
    "m": 1
   }
  ],
  "steps": [
   "Write the given mask in binary. /8 = <code>11111111.00000000.00000000.00000000</code>",
   "Bits to borrow: smallest n where 2^n &ge; 6. <code>2^1 = 2 &nbsp;&middot;&nbsp; 2^2 = 4 &nbsp;&middot;&nbsp; 2^3 = 8 &#10003;</code> &rarr; <b>borrow 3 bits</b>.",
   "New mask: turn 3 host bits into 1s &rarr; <code>11111111.<b>1</b><b>1</b><b>1</b>00000.00000000.00000000</code> = <b>/11</b>.",
   "Convert to decimal: the 2nd octet has 3 ones = 128 + 64 + 32 = 224. Octets before it are 255, after it 0 &rarr; <b>255.224.0.0</b>.",
   "Increment: the last 1 is in the <b>2nd octet</b>, which has 5 zeros left &rarr; 2^5 = <b>32</b>, added in the 2nd octet.",
   "Hosts per subnet: host bits = 32 &minus; 11 = 21 &rarr; 2^21 &minus; 2 = <b>2097150</b> usable (2097152 addresses; the network and broadcast addresses can't be used).",
   "Subnets created: 2^3 = <b>8</b>.",
   "Check the hosts fit: each subnet has <b>2097150</b> usable hosts and the question needs 1000000 &rarr; 2097150 &ge; 1000000 &#10003;",
   "List the subnets: start at the given network and add the increment each time. Broadcast = next network &minus; 1; usable hosts are everything in between."
  ],
  "table": {
   "head": [
    "#",
    "Network",
    "First usable",
    "Last usable",
    "Broadcast"
   ],
   "rows": [
    [
     "1",
     "10.0.0.0/11",
     "10.0.0.1",
     "10.31.255.254",
     "10.31.255.255"
    ],
    [
     "2",
     "10.32.0.0/11",
     "10.32.0.1",
     "10.63.255.254",
     "10.63.255.255"
    ],
    [
     "3",
     "10.64.0.0/11",
     "10.64.0.1",
     "10.95.255.254",
     "10.95.255.255"
    ],
    [
     "8",
     "10.224.0.0/11",
     "10.224.0.1",
     "10.255.255.254",
     "10.255.255.255"
    ]
   ]
  },
  "id": 11
 },
 {
  "set": "C",
  "marks": 8,
  "text": "Subnet <b>192.168.10.0/24</b> so that every subnet can hold at least <b>50 hosts</b>. Give the new subnet mask, the usable hosts per subnet, the number of subnets created and the increment, then list the first three subnets (network, host range, broadcast).",
  "fields": [
   {
    "l": "Host bits kept",
    "a": 6,
    "k": "int",
    "m": 1
   },
   {
    "l": "New mask (decimal)",
    "a": "255.255.255.192",
    "k": "mask",
    "m": 2
   },
   {
    "l": "Usable hosts per subnet",
    "a": 62,
    "k": "int",
    "m": 1
   },
   {
    "l": "Subnets created",
    "a": 4,
    "k": "int",
    "m": 1
   },
   {
    "l": "Increment",
    "a": 64,
    "k": "int",
    "m": 1
   },
   {
    "l": "3rd subnet network address",
    "a": "192.168.10.128",
    "k": "ip",
    "m": 2
   }
  ],
  "steps": [
   "Write the given mask in binary. /24 = <code>11111111.11111111.11111111.00000000</code>",
   "Host bits to keep: smallest h where 2^h &minus; 2 &ge; 50. <code>2^1 - 2 = 0 &nbsp;&middot;&nbsp; 2^2 - 2 = 2 &nbsp;&middot;&nbsp; 2^3 - 2 = 6 &nbsp;&middot;&nbsp; 2^4 - 2 = 14 &nbsp;&middot;&nbsp; 2^5 - 2 = 30 &nbsp;&middot;&nbsp; 2^6 - 2 = 62 &#10003;</code> &rarr; <b>keep 6 host bits</b> (0s).",
   "New mask: keep 6 zeros on the right, the rest become 1s &rarr; <code>11111111.11111111.11111111.<b>1</b><b>1</b>000000</code> = <b>/26</b>.",
   "Convert to decimal: the 4th octet has 2 ones = 128 + 64 = 192. Octets before it are 255, after it 0 &rarr; <b>255.255.255.192</b>.",
   "Increment: the last 1 is in the <b>4th octet</b>, which has 6 zeros left &rarr; 2^6 = <b>64</b>, added in the 4th octet.",
   "Hosts per subnet: host bits = 32 &minus; 26 = 6 &rarr; 2^6 &minus; 2 = <b>62</b> usable (64 addresses; the network and broadcast addresses can't be used).",
   "Subnets created: 2^2 = <b>4</b>.",
   "List the subnets: start at the given network and keep adding the increment."
  ],
  "table": {
   "head": [
    "#",
    "Network",
    "First usable",
    "Last usable",
    "Broadcast"
   ],
   "rows": [
    [
     "1",
     "192.168.10.0/26",
     "192.168.10.1",
     "192.168.10.62",
     "192.168.10.63"
    ],
    [
     "2",
     "192.168.10.64/26",
     "192.168.10.65",
     "192.168.10.126",
     "192.168.10.127"
    ],
    [
     "3",
     "192.168.10.128/26",
     "192.168.10.129",
     "192.168.10.190",
     "192.168.10.191"
    ]
   ]
  },
  "id": 12
 },
 {
  "set": "C",
  "marks": 8,
  "text": "Subnet <b>172.16.0.0/16</b> so that every subnet can hold at least <b>1000 hosts</b>. Give the new subnet mask, the usable hosts per subnet, the number of subnets created and the increment, then list the first three subnets (network, host range, broadcast).",
  "fields": [
   {
    "l": "Host bits kept",
    "a": 10,
    "k": "int",
    "m": 1
   },
   {
    "l": "New mask (decimal)",
    "a": "255.255.252.0",
    "k": "mask",
    "m": 2
   },
   {
    "l": "Usable hosts per subnet",
    "a": 1022,
    "k": "int",
    "m": 1
   },
   {
    "l": "Subnets created",
    "a": 64,
    "k": "int",
    "m": 1
   },
   {
    "l": "Increment",
    "a": 4,
    "k": "int",
    "m": 1
   },
   {
    "l": "3rd subnet network address",
    "a": "172.16.8.0",
    "k": "ip",
    "m": 2
   }
  ],
  "steps": [
   "Write the given mask in binary. /16 = <code>11111111.11111111.00000000.00000000</code>",
   "Host bits to keep: smallest h where 2^h &minus; 2 &ge; 1000. <code>2^1 - 2 = 0 &nbsp;&middot;&nbsp; 2^2 - 2 = 2 &nbsp;&middot;&nbsp; 2^3 - 2 = 6 &nbsp;&middot;&nbsp; 2^4 - 2 = 14 &nbsp;&middot;&nbsp; 2^5 - 2 = 30 &nbsp;&middot;&nbsp; 2^6 - 2 = 62 &nbsp;&middot;&nbsp; 2^7 - 2 = 126 &nbsp;&middot;&nbsp; 2^8 - 2 = 254 &nbsp;&middot;&nbsp; 2^9 - 2 = 510 &nbsp;&middot;&nbsp; 2^10 - 2 = 1022 &#10003;</code> &rarr; <b>keep 10 host bits</b> (0s).",
   "New mask: keep 10 zeros on the right, the rest become 1s &rarr; <code>11111111.11111111.<b>1</b><b>1</b><b>1</b><b>1</b><b>1</b><b>1</b>00.00000000</code> = <b>/22</b>.",
   "Convert to decimal: the 3rd octet has 6 ones = 128 + 64 + 32 + 16 + 8 + 4 = 252. Octets before it are 255, after it 0 &rarr; <b>255.255.252.0</b>.",
   "Increment: the last 1 is in the <b>3rd octet</b>, which has 2 zeros left &rarr; 2^2 = <b>4</b>, added in the 3rd octet.",
   "Hosts per subnet: host bits = 32 &minus; 22 = 10 &rarr; 2^10 &minus; 2 = <b>1022</b> usable (1024 addresses; the network and broadcast addresses can't be used).",
   "Subnets created: 2^6 = <b>64</b>.",
   "List the subnets: start at the given network and keep adding the increment."
  ],
  "table": {
   "head": [
    "#",
    "Network",
    "First usable",
    "Last usable",
    "Broadcast"
   ],
   "rows": [
    [
     "1",
     "172.16.0.0/22",
     "172.16.0.1",
     "172.16.3.254",
     "172.16.3.255"
    ],
    [
     "2",
     "172.16.4.0/22",
     "172.16.4.1",
     "172.16.7.254",
     "172.16.7.255"
    ],
    [
     "3",
     "172.16.8.0/22",
     "172.16.8.1",
     "172.16.11.254",
     "172.16.11.255"
    ]
   ]
  },
  "id": 13
 },
 {
  "set": "C",
  "marks": 8,
  "text": "Subnet <b>192.168.30.0/24</b> so that every subnet can hold at least <b>20 hosts</b>. Give the new subnet mask, the usable hosts per subnet, the number of subnets created and the increment, then list the first three subnets (network, host range, broadcast).",
  "fields": [
   {
    "l": "Host bits kept",
    "a": 5,
    "k": "int",
    "m": 1
   },
   {
    "l": "New mask (decimal)",
    "a": "255.255.255.224",
    "k": "mask",
    "m": 2
   },
   {
    "l": "Usable hosts per subnet",
    "a": 30,
    "k": "int",
    "m": 1
   },
   {
    "l": "Subnets created",
    "a": 8,
    "k": "int",
    "m": 1
   },
   {
    "l": "Increment",
    "a": 32,
    "k": "int",
    "m": 1
   },
   {
    "l": "3rd subnet network address",
    "a": "192.168.30.64",
    "k": "ip",
    "m": 2
   }
  ],
  "steps": [
   "Write the given mask in binary. /24 = <code>11111111.11111111.11111111.00000000</code>",
   "Host bits to keep: smallest h where 2^h &minus; 2 &ge; 20. <code>2^1 - 2 = 0 &nbsp;&middot;&nbsp; 2^2 - 2 = 2 &nbsp;&middot;&nbsp; 2^3 - 2 = 6 &nbsp;&middot;&nbsp; 2^4 - 2 = 14 &nbsp;&middot;&nbsp; 2^5 - 2 = 30 &#10003;</code> &rarr; <b>keep 5 host bits</b> (0s).",
   "New mask: keep 5 zeros on the right, the rest become 1s &rarr; <code>11111111.11111111.11111111.<b>1</b><b>1</b><b>1</b>00000</code> = <b>/27</b>.",
   "Convert to decimal: the 4th octet has 3 ones = 128 + 64 + 32 = 224. Octets before it are 255, after it 0 &rarr; <b>255.255.255.224</b>.",
   "Increment: the last 1 is in the <b>4th octet</b>, which has 5 zeros left &rarr; 2^5 = <b>32</b>, added in the 4th octet.",
   "Hosts per subnet: host bits = 32 &minus; 27 = 5 &rarr; 2^5 &minus; 2 = <b>30</b> usable (32 addresses; the network and broadcast addresses can't be used).",
   "Subnets created: 2^3 = <b>8</b>.",
   "List the subnets: start at the given network and keep adding the increment."
  ],
  "table": {
   "head": [
    "#",
    "Network",
    "First usable",
    "Last usable",
    "Broadcast"
   ],
   "rows": [
    [
     "1",
     "192.168.30.0/27",
     "192.168.30.1",
     "192.168.30.30",
     "192.168.30.31"
    ],
    [
     "2",
     "192.168.30.32/27",
     "192.168.30.33",
     "192.168.30.62",
     "192.168.30.63"
    ],
    [
     "3",
     "192.168.30.64/27",
     "192.168.30.65",
     "192.168.30.94",
     "192.168.30.95"
    ]
   ]
  },
  "id": 14
 },
 {
  "set": "C",
  "marks": 8,
  "text": "Subnet <b>172.18.0.0/16</b> so that every subnet can hold at least <b>300 hosts</b>. Give the new subnet mask, the usable hosts per subnet, the number of subnets created and the increment, then list the first three subnets (network, host range, broadcast).",
  "fields": [
   {
    "l": "Host bits kept",
    "a": 9,
    "k": "int",
    "m": 1
   },
   {
    "l": "New mask (decimal)",
    "a": "255.255.254.0",
    "k": "mask",
    "m": 2
   },
   {
    "l": "Usable hosts per subnet",
    "a": 510,
    "k": "int",
    "m": 1
   },
   {
    "l": "Subnets created",
    "a": 128,
    "k": "int",
    "m": 1
   },
   {
    "l": "Increment",
    "a": 2,
    "k": "int",
    "m": 1
   },
   {
    "l": "3rd subnet network address",
    "a": "172.18.4.0",
    "k": "ip",
    "m": 2
   }
  ],
  "steps": [
   "Write the given mask in binary. /16 = <code>11111111.11111111.00000000.00000000</code>",
   "Host bits to keep: smallest h where 2^h &minus; 2 &ge; 300. <code>2^1 - 2 = 0 &nbsp;&middot;&nbsp; 2^2 - 2 = 2 &nbsp;&middot;&nbsp; 2^3 - 2 = 6 &nbsp;&middot;&nbsp; 2^4 - 2 = 14 &nbsp;&middot;&nbsp; 2^5 - 2 = 30 &nbsp;&middot;&nbsp; 2^6 - 2 = 62 &nbsp;&middot;&nbsp; 2^7 - 2 = 126 &nbsp;&middot;&nbsp; 2^8 - 2 = 254 &nbsp;&middot;&nbsp; 2^9 - 2 = 510 &#10003;</code> &rarr; <b>keep 9 host bits</b> (0s).",
   "New mask: keep 9 zeros on the right, the rest become 1s &rarr; <code>11111111.11111111.<b>1</b><b>1</b><b>1</b><b>1</b><b>1</b><b>1</b><b>1</b>0.00000000</code> = <b>/23</b>.",
   "Convert to decimal: the 3rd octet has 7 ones = 128 + 64 + 32 + 16 + 8 + 4 + 2 = 254. Octets before it are 255, after it 0 &rarr; <b>255.255.254.0</b>.",
   "Increment: the last 1 is in the <b>3rd octet</b>, which has 1 zero left &rarr; 2^1 = <b>2</b>, added in the 3rd octet.",
   "Hosts per subnet: host bits = 32 &minus; 23 = 9 &rarr; 2^9 &minus; 2 = <b>510</b> usable (512 addresses; the network and broadcast addresses can't be used).",
   "Subnets created: 2^7 = <b>128</b>.",
   "List the subnets: start at the given network and keep adding the increment."
  ],
  "table": {
   "head": [
    "#",
    "Network",
    "First usable",
    "Last usable",
    "Broadcast"
   ],
   "rows": [
    [
     "1",
     "172.18.0.0/23",
     "172.18.0.1",
     "172.18.1.254",
     "172.18.1.255"
    ],
    [
     "2",
     "172.18.2.0/23",
     "172.18.2.1",
     "172.18.3.254",
     "172.18.3.255"
    ],
    [
     "3",
     "172.18.4.0/23",
     "172.18.4.1",
     "172.18.5.254",
     "172.18.5.255"
    ]
   ]
  },
  "id": 15
 },
 {
  "set": "D",
  "marks": 4,
  "text": "A network administrator has <b>192.168.5.0/24</b> and needs <b>6 subnets</b>, each with at least <b>25 hosts</b>. Using equal-sized subnets, is this possible? Show your calculation and, if it is, give the subnet mask.",
  "fields": [
   {
    "l": "Possible? (yes / no)",
    "a": "yes",
    "k": "yn",
    "m": 2
   },
   {
    "l": "Subnet mask to use",
    "a": "255.255.255.224",
    "k": "mask",
    "m": 2
   }
  ],
  "steps": [
   "Subnets: 2^3 = 8 &ge; 6 &rarr; borrow 3 bits &rarr; the prefix must be <b>at least /27</b>.",
   "Hosts: 2^5 &minus; 2 = 30 &ge; 25 &rarr; keep 5 host bits &rarr; the prefix can be <b>at most /27</b>.",
   "/27 &le; /27, so it fits. Use <b>/27 = 255.255.255.224</b>: 8 subnets of 30 usable hosts each."
  ],
  "id": 16
 },
 {
  "set": "D",
  "marks": 2,
  "text": "A network administrator has <b>192.168.6.0/24</b> and needs <b>5 subnets</b>, each with at least <b>40 hosts</b>. Using equal-sized subnets, is this possible? Show your calculation and, if it is, give the subnet mask.",
  "fields": [
   {
    "l": "Possible? (yes / no)",
    "a": "no",
    "k": "yn",
    "m": 2
   }
  ],
  "steps": [
   "Subnets: 2^3 = 8 &ge; 5 &rarr; borrow 3 bits &rarr; the prefix must be <b>at least /27</b>.",
   "Hosts: 2^6 &minus; 2 = 62 &ge; 40 &rarr; keep 6 host bits &rarr; the prefix can be <b>at most /26</b>.",
   "/27 is longer than /26, so it <b>does not fit</b> with equal-sized subnets: /27 only gives 30 hosts, and /26 only gives 4 subnets. (VLSM or a bigger block would be needed.)"
  ],
  "id": 17
 },
 {
  "set": "D",
  "marks": 4,
  "text": "A network administrator has <b>172.16.0.0/16</b> and needs <b>20 subnets</b>, each with at least <b>2000 hosts</b>. Using equal-sized subnets, is this possible? Show your calculation and, if it is, give the subnet mask.",
  "fields": [
   {
    "l": "Possible? (yes / no)",
    "a": "yes",
    "k": "yn",
    "m": 2
   },
   {
    "l": "Subnet mask to use",
    "a": "255.255.248.0",
    "k": "mask",
    "m": 2
   }
  ],
  "steps": [
   "Subnets: 2^5 = 32 &ge; 20 &rarr; borrow 5 bits &rarr; the prefix must be <b>at least /21</b>.",
   "Hosts: 2^11 &minus; 2 = 2046 &ge; 2000 &rarr; keep 11 host bits &rarr; the prefix can be <b>at most /21</b>.",
   "/21 &le; /21, so it fits. Use <b>/21 = 255.255.248.0</b>: 32 subnets of 2046 usable hosts each."
  ],
  "id": 18
 },
 {
  "set": "E",
  "marks": 12,
  "lab": null,
  "text": "Using VLSM, design an addressing scheme for <b>192.168.10.0/24</b>: LAN A needs 100 hosts, LAN B needs 50 hosts, LAN C needs 25 hosts, LAN D needs 10 hosts, WAN 1 is a router-to-router link, WAN 2 is a router-to-router link. Give each subnet's network address, prefix, usable range and broadcast. Allocate the largest first.",
  "fields": [
   {
    "l": "LAN A: network/prefix",
    "a": "192.168.10.0/25",
    "k": "cidr",
    "m": 2
   },
   {
    "l": "LAN B: network/prefix",
    "a": "192.168.10.128/26",
    "k": "cidr",
    "m": 2
   },
   {
    "l": "LAN C: network/prefix",
    "a": "192.168.10.192/27",
    "k": "cidr",
    "m": 2
   },
   {
    "l": "LAN D: network/prefix",
    "a": "192.168.10.224/28",
    "k": "cidr",
    "m": 2
   },
   {
    "l": "WAN 1: network/prefix",
    "a": "192.168.10.240/30",
    "k": "cidr",
    "m": 2
   },
   {
    "l": "WAN 2: network/prefix",
    "a": "192.168.10.244/30",
    "k": "cidr",
    "m": 2
   }
  ],
  "steps": [
   "List every subnet with its host count and sort <b>largest to smallest</b>: LAN A (100), LAN B (50), LAN C (25), LAN D (10), WAN 1 (2), WAN 2 (2). Each WAN link needs 2 hosts.",
   "<b>LAN A</b> needs 100: 2^7 &minus; 2 = 126 &ge; 100 &rarr; /25 (255.255.255.128), block 128. Starts at 192.168.10.0, ends at 192.168.10.127.",
   "<b>LAN B</b> needs 50: 2^6 &minus; 2 = 62 &ge; 50 &rarr; /26 (255.255.255.192), block 64. Starts at 192.168.10.128, ends at 192.168.10.191.",
   "<b>LAN C</b> needs 25: 2^5 &minus; 2 = 30 &ge; 25 &rarr; /27 (255.255.255.224), block 32. Starts at 192.168.10.192, ends at 192.168.10.223.",
   "<b>LAN D</b> needs 10: 2^4 &minus; 2 = 14 &ge; 10 &rarr; /28 (255.255.255.240), block 16. Starts at 192.168.10.224, ends at 192.168.10.239.",
   "<b>WAN 1</b> needs 2: 2^2 &minus; 2 = 2 &ge; 2 &rarr; /30 (255.255.255.252), block 4. Starts at 192.168.10.240, ends at 192.168.10.243.",
   "<b>WAN 2</b> needs 2: 2^2 &minus; 2 = 2 &ge; 2 &rarr; /30 (255.255.255.252), block 4. Starts at 192.168.10.244, ends at 192.168.10.247.",
   "Check: the last block ends at 192.168.10.247, still inside 192.168.10.0/24. Next free address is 192.168.10.248."
  ],
  "table": {
   "head": [
    "Subnet",
    "Hosts",
    "Prefix",
    "Network",
    "Usable range",
    "Broadcast"
   ],
   "rows": [
    [
     "LAN A",
     "100",
     "/25",
     "192.168.10.0",
     "192.168.10.1 &ndash; 192.168.10.126",
     "192.168.10.127"
    ],
    [
     "LAN B",
     "50",
     "/26",
     "192.168.10.128",
     "192.168.10.129 &ndash; 192.168.10.190",
     "192.168.10.191"
    ],
    [
     "LAN C",
     "25",
     "/27",
     "192.168.10.192",
     "192.168.10.193 &ndash; 192.168.10.222",
     "192.168.10.223"
    ],
    [
     "LAN D",
     "10",
     "/28",
     "192.168.10.224",
     "192.168.10.225 &ndash; 192.168.10.238",
     "192.168.10.239"
    ],
    [
     "WAN 1",
     "2",
     "/30",
     "192.168.10.240",
     "192.168.10.241 &ndash; 192.168.10.242",
     "192.168.10.243"
    ],
    [
     "WAN 2",
     "2",
     "/30",
     "192.168.10.244",
     "192.168.10.245 &ndash; 192.168.10.246",
     "192.168.10.247"
    ]
   ]
  },
  "id": 19
 },
 {
  "set": "E",
  "marks": 10,
  "lab": "Same requirements as your Packet Tracer lab 11.9.3.",
  "text": "Using VLSM, design an addressing scheme for <b>10.11.48.0/24</b>: Host-D LAN needs 60 hosts, Host-B LAN needs 30 hosts, Host-A LAN needs 14 hosts, Host-C LAN needs 6 hosts, WAN link is a router-to-router link. Give each subnet's network address, prefix, usable range and broadcast. Allocate the largest first.",
  "fields": [
   {
    "l": "Host-D LAN: network/prefix",
    "a": "10.11.48.0/26",
    "k": "cidr",
    "m": 2
   },
   {
    "l": "Host-B LAN: network/prefix",
    "a": "10.11.48.64/27",
    "k": "cidr",
    "m": 2
   },
   {
    "l": "Host-A LAN: network/prefix",
    "a": "10.11.48.96/28",
    "k": "cidr",
    "m": 2
   },
   {
    "l": "Host-C LAN: network/prefix",
    "a": "10.11.48.112/29",
    "k": "cidr",
    "m": 2
   },
   {
    "l": "WAN link: network/prefix",
    "a": "10.11.48.120/30",
    "k": "cidr",
    "m": 2
   }
  ],
  "steps": [
   "List every subnet with its host count and sort <b>largest to smallest</b>: Host-D LAN (60), Host-B LAN (30), Host-A LAN (14), Host-C LAN (6), WAN link (2). Each WAN link needs 2 hosts.",
   "<b>Host-D LAN</b> needs 60: 2^6 &minus; 2 = 62 &ge; 60 &rarr; /26 (255.255.255.192), block 64. Starts at 10.11.48.0, ends at 10.11.48.63.",
   "<b>Host-B LAN</b> needs 30: 2^5 &minus; 2 = 30 &ge; 30 &rarr; /27 (255.255.255.224), block 32. Starts at 10.11.48.64, ends at 10.11.48.95.",
   "<b>Host-A LAN</b> needs 14: 2^4 &minus; 2 = 14 &ge; 14 &rarr; /28 (255.255.255.240), block 16. Starts at 10.11.48.96, ends at 10.11.48.111.",
   "<b>Host-C LAN</b> needs 6: 2^3 &minus; 2 = 6 &ge; 6 &rarr; /29 (255.255.255.248), block 8. Starts at 10.11.48.112, ends at 10.11.48.119.",
   "<b>WAN link</b> needs 2: 2^2 &minus; 2 = 2 &ge; 2 &rarr; /30 (255.255.255.252), block 4. Starts at 10.11.48.120, ends at 10.11.48.123.",
   "Check: the last block ends at 10.11.48.123, still inside 10.11.48.0/24. Next free address is 10.11.48.124."
  ],
  "table": {
   "head": [
    "Subnet",
    "Hosts",
    "Prefix",
    "Network",
    "Usable range",
    "Broadcast"
   ],
   "rows": [
    [
     "Host-D LAN",
     "60",
     "/26",
     "10.11.48.0",
     "10.11.48.1 &ndash; 10.11.48.62",
     "10.11.48.63"
    ],
    [
     "Host-B LAN",
     "30",
     "/27",
     "10.11.48.64",
     "10.11.48.65 &ndash; 10.11.48.94",
     "10.11.48.95"
    ],
    [
     "Host-A LAN",
     "14",
     "/28",
     "10.11.48.96",
     "10.11.48.97 &ndash; 10.11.48.110",
     "10.11.48.111"
    ],
    [
     "Host-C LAN",
     "6",
     "/29",
     "10.11.48.112",
     "10.11.48.113 &ndash; 10.11.48.118",
     "10.11.48.119"
    ],
    [
     "WAN link",
     "2",
     "/30",
     "10.11.48.120",
     "10.11.48.121 &ndash; 10.11.48.122",
     "10.11.48.123"
    ]
   ]
  },
  "id": 20
 }
];
