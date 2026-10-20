window.LQ = [
 {
  "set": "A",
  "text": "Perform a binary-to-decimal conversion for the binary string <b>11101000</b>. Show your working by calculating the positional values.",
  "fields": [
   {
    "l": "Decimal value",
    "a": "232",
    "k": "int",
    "m": 5,
    "alt": []
   }
  ],
  "points": [],
  "steps": [
   "Write the place values over the bits: <code>128 64 32 16 8 4 2 1</code> over <code>1 1 1 0 1 0 0 0</code>.",
   "Add the place values where the bit is 1: 128 + 64 + 32 + 8 = <b>232</b>."
  ],
  "answer": null,
  "note": "This is Q41 from the practice paper, word for word.",
  "table": null,
  "id": 1,
  "marks": 5
 },
 {
  "set": "A",
  "text": "Convert the binary number <b>10101100</b> to decimal. Show the positional values.",
  "fields": [
   {
    "l": "Decimal value",
    "a": "172",
    "k": "int",
    "m": 4,
    "alt": []
   }
  ],
  "points": [],
  "steps": [
   "Write the place values over the bits: <code>128 64 32 16 8 4 2 1</code> over <code>1 0 1 0 1 1 0 0</code>.",
   "Add the place values where the bit is 1: 128 + 32 + 8 + 4 = <b>172</b>."
  ],
  "answer": null,
  "note": null,
  "table": null,
  "id": 2,
  "marks": 4
 },
 {
  "set": "A",
  "text": "Convert the decimal number <b>200</b> to an 8-bit binary number. Show your working.",
  "fields": [
   {
    "l": "Binary",
    "a": "11001000",
    "k": "bin8",
    "m": 4,
    "alt": []
   }
  ],
  "points": [],
  "steps": [
   "Go through the place values from 128 down. If it fits, write 1 and subtract; if not, write 0.",
   "128 fits into 200 &rarr; 1, 200 &minus; 128 = 72<br>64 fits into 72 &rarr; 1, 72 &minus; 64 = 8<br>32 doesn't fit into 8 &rarr; 0<br>16 doesn't fit into 8 &rarr; 0<br>8 fits into 8 &rarr; 1, 8 &minus; 8 = 0<br>4 doesn't fit into 0 &rarr; 0<br>2 doesn't fit into 0 &rarr; 0<br>1 doesn't fit into 0 &rarr; 0",
   "Result: <b>11001000</b>."
  ],
  "answer": null,
  "note": null,
  "table": null,
  "id": 3,
  "marks": 4
 },
 {
  "set": "A",
  "text": "Convert the decimal number <b>77</b> to an 8-bit binary number. Show your working.",
  "fields": [
   {
    "l": "Binary",
    "a": "01001101",
    "k": "bin8",
    "m": 4,
    "alt": []
   }
  ],
  "points": [],
  "steps": [
   "Go through the place values from 128 down. If it fits, write 1 and subtract; if not, write 0.",
   "128 doesn't fit into 77 &rarr; 0<br>64 fits into 77 &rarr; 1, 77 &minus; 64 = 13<br>32 doesn't fit into 13 &rarr; 0<br>16 doesn't fit into 13 &rarr; 0<br>8 fits into 13 &rarr; 1, 13 &minus; 8 = 5<br>4 fits into 5 &rarr; 1, 5 &minus; 4 = 1<br>2 doesn't fit into 1 &rarr; 0<br>1 fits into 1 &rarr; 1, 1 &minus; 1 = 0",
   "Result: <b>01001101</b>."
  ],
  "answer": null,
  "note": null,
  "table": null,
  "id": 4,
  "marks": 4
 },
 {
  "set": "A",
  "text": "The hexadecimal value <b>AC</b> appears in a MAC address. Convert it to binary and to decimal.",
  "fields": [
   {
    "l": "Binary",
    "a": "10101100",
    "k": "bin8",
    "m": 2,
    "alt": []
   },
   {
    "l": "Decimal",
    "a": "172",
    "k": "int",
    "m": 2,
    "alt": []
   }
  ],
  "points": [],
  "steps": [
   "Each hex digit is exactly 4 bits. A = 10 = <code>1010</code>, C = 12 = <code>1100</code>.",
   "Put them together: <b>10101100</b>.",
   "Decimal: 128 + 32 + 8 + 4 = <b>172</b> (or 10 &times; 16 + 12 = 172)."
  ],
  "answer": null,
  "note": null,
  "table": null,
  "id": 5,
  "marks": 4
 },
 {
  "set": "A",
  "text": "Write the IPv4 address <b>192.168.10.65</b> in dotted binary.",
  "fields": [
   {
    "l": "Dotted binary",
    "a": "11000000.10101000.00001010.01000001",
    "k": "binip",
    "m": 5,
    "alt": []
   }
  ],
  "points": [],
  "steps": [
   "Convert each octet on its own to 8 bits (keep leading zeros so every octet has 8 digits).",
   "192 = <code>11000000</code>",
   "168 = <code>10101000</code>",
   "10 = <code>00001010</code>",
   "65 = <code>01000001</code>",
   "Together: <b>11000000.10101000.00001010.01000001</b>."
  ],
  "answer": null,
  "note": null,
  "table": null,
  "id": 6,
  "marks": 5
 },
 {
  "set": "A",
  "text": "Convert the address <b>10101100.00010000.00011110.00001110</b> to dotted decimal.",
  "fields": [
   {
    "l": "Dotted decimal",
    "a": "172.16.30.14",
    "k": "ip",
    "m": 5,
    "alt": []
   }
  ],
  "points": [],
  "steps": [
   "Convert each octet separately using the place values 128 64 32 16 8 4 2 1.",
   "<code>10101100</code> = 128 + 32 + 8 + 4 = 172",
   "<code>00010000</code> = 16 = 16",
   "<code>00011110</code> = 16 + 8 + 4 + 2 = 30",
   "<code>00001110</code> = 8 + 4 + 2 = 14",
   "Together: <b>172.16.30.14</b>."
  ],
  "answer": null,
  "note": null,
  "table": null,
  "id": 7,
  "marks": 5
 },
 {
  "set": "A",
  "text": "Convert the hexadecimal value <b>FE</b> to decimal and binary, and say why <b>FFFE</b> matters in IPv6.",
  "fields": [
   {
    "l": "Decimal",
    "a": "254",
    "k": "int",
    "m": 1,
    "alt": []
   },
   {
    "l": "Binary",
    "a": "11111110",
    "k": "bin8",
    "m": 1,
    "alt": []
   }
  ],
  "points": [
   {
    "t": "FFFE is the 16-bit value inserted into the middle of a MAC address in the EUI-64 process",
    "m": 1
   }
  ],
  "steps": [
   "F = 15 = <code>1111</code>, E = 14 = <code>1110</code> &rarr; <b>11111110</b> = <b>254</b>."
  ],
  "answer": "EUI-64 splits the 48-bit MAC in half and inserts <b>FFFE</b> in the middle to make a 64-bit interface ID.",
  "note": null,
  "table": null,
  "id": 8,
  "marks": 3
 },
 {
  "set": "B",
  "text": "Write <b>2001:0db8:0000:0000:0000:0000:0000:0001</b> in its shortest (compressed) form. Explain which rule you applied at each step.",
  "fields": [
   {
    "l": "Compressed address",
    "a": "2001:db8::1",
    "k": "v6c",
    "m": 4,
    "alt": []
   }
  ],
  "points": [],
  "steps": [
   "Write all 8 hextets: <code>2001:0db8:0000:0000:0000:0000:0000:0001</code>.",
   "Rule 1 &mdash; drop leading zeros in each hextet: <code>2001:db8:0:0:0:0:0:1</code>.",
   "Rule 2 &mdash; replace the longest run of all-zero hextets with <b>::</b> (only once): <b>2001:db8::1</b>."
  ],
  "answer": null,
  "note": "From the practice paper (OCN401 Q8).",
  "table": null,
  "id": 9,
  "marks": 4
 },
 {
  "set": "B",
  "text": "Write <b>2001:0db8:0000:1111:0000:0000:0000:0200</b> in its shortest (compressed) form. Explain which rule you applied at each step.",
  "fields": [
   {
    "l": "Compressed address",
    "a": "2001:db8:0:1111::200",
    "k": "v6c",
    "m": 4,
    "alt": []
   }
  ],
  "points": [],
  "steps": [
   "Write all 8 hextets: <code>2001:0db8:0000:1111:0000:0000:0000:0200</code>.",
   "Rule 1 &mdash; drop leading zeros in each hextet: <code>2001:db8:0:1111:0:0:0:200</code>.",
   "Rule 2 &mdash; replace the longest run of all-zero hextets with <b>::</b> (only once): <b>2001:db8:0:1111::200</b>."
  ],
  "answer": null,
  "note": "This is the example on your IP addressing slides.",
  "table": null,
  "id": 10,
  "marks": 4
 },
 {
  "set": "B",
  "text": "Write <b>fe80:0000:0000:0000:0123:4567:89ab:cdef</b> in its shortest (compressed) form. Explain which rule you applied at each step.",
  "fields": [
   {
    "l": "Compressed address",
    "a": "fe80::123:4567:89ab:cdef",
    "k": "v6c",
    "m": 4,
    "alt": []
   }
  ],
  "points": [],
  "steps": [
   "Write all 8 hextets: <code>fe80:0000:0000:0000:0123:4567:89ab:cdef</code>.",
   "Rule 1 &mdash; drop leading zeros in each hextet: <code>fe80:0:0:0:123:4567:89ab:cdef</code>.",
   "Rule 2 &mdash; replace the longest run of all-zero hextets with <b>::</b> (only once): <b>fe80::123:4567:89ab:cdef</b>."
  ],
  "answer": null,
  "note": null,
  "table": null,
  "id": 11,
  "marks": 4
 },
 {
  "set": "B",
  "text": "Write <b>2001:0db8:acad:0001:0000:0000:0000:000a</b> in its shortest (compressed) form. Explain which rule you applied at each step.",
  "fields": [
   {
    "l": "Compressed address",
    "a": "2001:db8:acad:1::a",
    "k": "v6c",
    "m": 4,
    "alt": []
   }
  ],
  "points": [],
  "steps": [
   "Write all 8 hextets: <code>2001:0db8:acad:0001:0000:0000:0000:000a</code>.",
   "Rule 1 &mdash; drop leading zeros in each hextet: <code>2001:db8:acad:1:0:0:0:a</code>.",
   "Rule 2 &mdash; replace the longest run of all-zero hextets with <b>::</b> (only once): <b>2001:db8:acad:1::a</b>."
  ],
  "answer": null,
  "note": null,
  "table": null,
  "id": 12,
  "marks": 4
 },
 {
  "set": "B",
  "text": "Expand <b>2001:db8:cafe:1::1</b> to its full 32-hex-digit form.",
  "fields": [
   {
    "l": "Full address",
    "a": "2001:0db8:cafe:0001:0000:0000:0000:0001",
    "k": "v6full",
    "m": 4,
    "alt": []
   }
  ],
  "points": [],
  "steps": [
   "Count the hextets that are written: the <b>::</b> stands for however many all-zero hextets are missing to make 8.",
   "Put back the missing <code>0000</code> hextets and pad every hextet to 4 digits with leading zeros.",
   "Result: <b>2001:0db8:cafe:0001:0000:0000:0000:0001</b>."
  ],
  "answer": null,
  "note": null,
  "table": null,
  "id": 13,
  "marks": 4
 },
 {
  "set": "B",
  "text": "Expand <b>fe80::1</b> to its full 32-hex-digit form.",
  "fields": [
   {
    "l": "Full address",
    "a": "fe80:0000:0000:0000:0000:0000:0000:0001",
    "k": "v6full",
    "m": 4,
    "alt": []
   }
  ],
  "points": [],
  "steps": [
   "Count the hextets that are written: the <b>::</b> stands for however many all-zero hextets are missing to make 8.",
   "Put back the missing <code>0000</code> hextets and pad every hextet to 4 digits with leading zeros.",
   "Result: <b>fe80:0000:0000:0000:0000:0000:0000:0001</b>."
  ],
  "answer": null,
  "note": null,
  "table": null,
  "id": 14,
  "marks": 4
 },
 {
  "set": "B",
  "text": "A host with MAC address <b>00:1B:44:11:3A:B7</b> uses SLAAC with EUI-64. The router advertises the prefix <b>2001:db8:acad:1::/64</b>. Work out the 64-bit interface ID and the host's full IPv6 address.",
  "fields": [
   {
    "l": "Interface ID",
    "a": "021b:44ff:fe11:3ab7",
    "k": "iid",
    "m": 3,
    "alt": []
   },
   {
    "l": "Full IPv6 address",
    "a": "2001:db8:acad:1:21b:44ff:fe11:3ab7",
    "k": "v6",
    "m": 2,
    "alt": []
   }
  ],
  "points": [],
  "steps": [
   "Split the 48-bit MAC in half: <code>001B44</code> | <code>113AB7</code>.",
   "Insert <b>FFFE</b> in the middle: <code>001B44FFFE113AB7</code>.",
   "Flip the 7th bit (the U/L bit) of the first byte: 00 = <code>00000000</code> &rarr; <code>00000010</code> = 02.",
   "Interface ID = <b>021B:44FF:FE11:3AB7</b>.",
   "Join the /64 prefix and the interface ID: <b>2001:db8:acad:1:21b:44ff:fe11:3ab7</b>."
  ],
  "answer": null,
  "note": null,
  "table": null,
  "id": 15,
  "marks": 5
 },
 {
  "set": "B",
  "text": "A host with MAC address <b>C8:5B:76:2D:91:0F</b> uses SLAAC with EUI-64. The router advertises the prefix <b>2001:db8:cafe:10::/64</b>. Work out the 64-bit interface ID and the host's full IPv6 address.",
  "fields": [
   {
    "l": "Interface ID",
    "a": "ca5b:76ff:fe2d:910f",
    "k": "iid",
    "m": 3,
    "alt": []
   },
   {
    "l": "Full IPv6 address",
    "a": "2001:db8:cafe:10:ca5b:76ff:fe2d:910f",
    "k": "v6",
    "m": 2,
    "alt": []
   }
  ],
  "points": [],
  "steps": [
   "Split the 48-bit MAC in half: <code>C85B76</code> | <code>2D910F</code>.",
   "Insert <b>FFFE</b> in the middle: <code>C85B76FFFE2D910F</code>.",
   "Flip the 7th bit (the U/L bit) of the first byte: C8 = <code>11001000</code> &rarr; <code>11001010</code> = CA.",
   "Interface ID = <b>CA5B:76FF:FE2D:910F</b>.",
   "Join the /64 prefix and the interface ID: <b>2001:db8:cafe:10:ca5b:76ff:fe2d:910f</b>."
  ],
  "answer": null,
  "note": null,
  "table": null,
  "id": 16,
  "marks": 5
 },
 {
  "set": "B",
  "text": "A host with MAC address <b>5C:26:0A:24:2A:60</b> uses SLAAC with EUI-64. The router advertises the prefix <b>fe80::/64</b>. Work out the 64-bit interface ID and the host's full IPv6 address.",
  "fields": [
   {
    "l": "Interface ID",
    "a": "5e26:0aff:fe24:2a60",
    "k": "iid",
    "m": 3,
    "alt": []
   },
   {
    "l": "Full IPv6 address",
    "a": "fe80::5e26:aff:fe24:2a60",
    "k": "v6",
    "m": 2,
    "alt": []
   }
  ],
  "points": [],
  "steps": [
   "Split the 48-bit MAC in half: <code>5C260A</code> | <code>242A60</code>.",
   "Insert <b>FFFE</b> in the middle: <code>5C260AFFFE242A60</code>.",
   "Flip the 7th bit (the U/L bit) of the first byte: 5C = <code>01011100</code> &rarr; <code>01011110</code> = 5E.",
   "Interface ID = <b>5E26:0AFF:FE24:2A60</b>.",
   "Join the /64 prefix and the interface ID: <b>fe80::5e26:aff:fe24:2a60</b>."
  ],
  "answer": null,
  "note": null,
  "table": null,
  "id": 17,
  "marks": 5
 },
 {
  "set": "C",
  "text": "A client opens a TCP connection to a web server. The client's initial sequence number is <b>100</b> and the server's is <b>300</b>. Describe the three steps of the handshake, giving the flags, sequence number and acknowledgement number in each segment.",
  "fields": [
   {
    "l": "Step 2 (server) ACK number",
    "a": "101",
    "k": "int",
    "m": 1,
    "alt": []
   },
   {
    "l": "Step 3 (client) SEQ number",
    "a": "101",
    "k": "int",
    "m": 1,
    "alt": []
   },
   {
    "l": "Step 3 (client) ACK number",
    "a": "301",
    "k": "int",
    "m": 1,
    "alt": []
   }
  ],
  "points": [
   {
    "t": "Step 1: client sends <b>SYN</b> with its starting sequence number",
    "m": 1
   },
   {
    "t": "Step 2: server replies <b>SYN-ACK</b> (SYN and ACK flags set) with its own sequence number",
    "m": 1
   },
   {
    "t": "Step 3: client sends <b>ACK</b>; the connection is now open in both directions",
    "m": 1
   },
   {
    "t": "ACK number = the other side's sequence number + 1 (the next byte expected)",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "Same as OCN401 Q23 and Paper 2 Q38, with numbers so you can practise the sequence logic.",
  "table": {
   "head": [
    "Step",
    "Sent by",
    "Flags",
    "SEQ",
    "ACK"
   ],
   "rows": [
    [
     "1",
     "Client",
     "SYN",
     "100",
     "&ndash;"
    ],
    [
     "2",
     "Server",
     "SYN, ACK",
     "300",
     "101"
    ],
    [
     "3",
     "Client",
     "ACK",
     "101",
     "301"
    ]
   ]
  },
  "id": 18,
  "marks": 7
 },
 {
  "set": "C",
  "text": "A client opens a TCP connection to a web server. The client's initial sequence number is <b>2450</b> and the server's is <b>7800</b>. Describe the three steps of the handshake, giving the flags, sequence number and acknowledgement number in each segment.",
  "fields": [
   {
    "l": "Step 2 (server) ACK number",
    "a": "2451",
    "k": "int",
    "m": 1,
    "alt": []
   },
   {
    "l": "Step 3 (client) SEQ number",
    "a": "2451",
    "k": "int",
    "m": 1,
    "alt": []
   },
   {
    "l": "Step 3 (client) ACK number",
    "a": "7801",
    "k": "int",
    "m": 1,
    "alt": []
   }
  ],
  "points": [
   {
    "t": "Step 1: client sends <b>SYN</b> with its starting sequence number",
    "m": 1
   },
   {
    "t": "Step 2: server replies <b>SYN-ACK</b> (SYN and ACK flags set) with its own sequence number",
    "m": 1
   },
   {
    "t": "Step 3: client sends <b>ACK</b>; the connection is now open in both directions",
    "m": 1
   },
   {
    "t": "ACK number = the other side's sequence number + 1 (the next byte expected)",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": null,
  "table": {
   "head": [
    "Step",
    "Sent by",
    "Flags",
    "SEQ",
    "ACK"
   ],
   "rows": [
    [
     "1",
     "Client",
     "SYN",
     "2450",
     "&ndash;"
    ],
    [
     "2",
     "Server",
     "SYN, ACK",
     "7800",
     "2451"
    ],
    [
     "3",
     "Client",
     "ACK",
     "2451",
     "7801"
    ]
   ]
  },
  "id": 19,
  "marks": 7
 },
 {
  "set": "C",
  "text": "A client opens a TCP connection to a web server. The client's initial sequence number is <b>5000</b> and the server's is <b>1</b>. Describe the three steps of the handshake, giving the flags, sequence number and acknowledgement number in each segment.",
  "fields": [
   {
    "l": "Step 2 (server) ACK number",
    "a": "5001",
    "k": "int",
    "m": 1,
    "alt": []
   },
   {
    "l": "Step 3 (client) SEQ number",
    "a": "5001",
    "k": "int",
    "m": 1,
    "alt": []
   },
   {
    "l": "Step 3 (client) ACK number",
    "a": "2",
    "k": "int",
    "m": 1,
    "alt": []
   }
  ],
  "points": [
   {
    "t": "Step 1: client sends <b>SYN</b> with its starting sequence number",
    "m": 1
   },
   {
    "t": "Step 2: server replies <b>SYN-ACK</b> (SYN and ACK flags set) with its own sequence number",
    "m": 1
   },
   {
    "t": "Step 3: client sends <b>ACK</b>; the connection is now open in both directions",
    "m": 1
   },
   {
    "t": "ACK number = the other side's sequence number + 1 (the next byte expected)",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": null,
  "table": {
   "head": [
    "Step",
    "Sent by",
    "Flags",
    "SEQ",
    "ACK"
   ],
   "rows": [
    [
     "1",
     "Client",
     "SYN",
     "5000",
     "&ndash;"
    ],
    [
     "2",
     "Server",
     "SYN, ACK",
     "1",
     "5001"
    ],
    [
     "3",
     "Client",
     "ACK",
     "5001",
     "2"
    ]
   ]
  },
  "id": 20,
  "marks": 7
 },
 {
  "set": "C",
  "text": "Ethernet's MTU is 1500 bytes. The IPv4 header is 20 bytes and the TCP header is 20 bytes. What is the <b>maximum segment size (MSS)</b>, and what does MSS mean?",
  "fields": [
   {
    "l": "MSS (bytes)",
    "a": "1460",
    "k": "int",
    "m": 2,
    "alt": []
   }
  ],
  "points": [
   {
    "t": "MSS = the largest amount of <i>data</i> a device can receive in one TCP segment",
    "m": 1
   }
  ],
  "steps": [
   "MSS = MTU &minus; IPv4 header &minus; TCP header = 1500 &minus; 20 &minus; 20 = <b>1460 bytes</b>."
  ],
  "answer": null,
  "note": null,
  "table": null,
  "id": 21,
  "marks": 3
 },
 {
  "set": "C",
  "text": "A receiver advertises a TCP window size of <b>10 000 bytes</b>. The sender is sending segments of <b>1 000 bytes</b> of data. How many segments can it send before it must wait for an acknowledgement? Explain how this provides flow control.",
  "fields": [
   {
    "l": "Segments before waiting",
    "a": "10",
    "k": "int",
    "m": 2,
    "alt": []
   }
  ],
  "points": [
   {
    "t": "Window size = how many bytes may be sent before an acknowledgement is needed",
    "m": 1
   },
   {
    "t": "The receiver sets the window, so it controls how fast the sender can go (flow control)",
    "m": 1
   },
   {
    "t": "Sliding window: as ACKs arrive the window slides forward; the receiver can shrink or grow it",
    "m": 1
   }
  ],
  "steps": [
   "10 000 &divide; 1 000 = <b>10 segments</b>."
  ],
  "answer": null,
  "note": null,
  "table": null,
  "id": 22,
  "marks": 5
 },
 {
  "set": "C",
  "text": "Compare and contrast the reliability features of TCP with the best-effort delivery of UDP. Explain three TCP features that ensure data integrity and ordered delivery.",
  "fields": [],
  "points": [
   {
    "t": "TCP is connection-oriented (3-way handshake); UDP is connectionless",
    "m": 1
   },
   {
    "t": "Sequence numbers let the receiver reorder segments and spot missing ones",
    "m": 1
   },
   {
    "t": "Acknowledgements + retransmission: anything not acknowledged is sent again",
    "m": 1
   },
   {
    "t": "Flow control with the window size stops the sender overwhelming the receiver",
    "m": 1
   },
   {
    "t": "UDP has none of these (no sequencing, no ACKs, no retransmission) but an 8-byte header and low overhead",
    "m": 1
   },
   {
    "t": "UDP delivers in the order received; the application must cope with loss",
    "m": 1
   },
   {
    "t": "Example uses: TCP for HTTP/FTP/email; UDP for DNS, DHCP, VoIP, video",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "OCN401 Q27 (7 marks).",
  "table": null,
  "id": 23,
  "marks": 7
 },
 {
  "set": "C",
  "text": "Explain why UDP is preferred over TCP for real-time applications such as VoIP and live video. Give at least two advantages.",
  "fields": [],
  "points": [
   {
    "t": "No connection set-up (no handshake) &rarr; less delay",
    "m": 1
   },
   {
    "t": "No retransmission waits &mdash; a late, resent voice packet is useless anyway",
    "m": 1
   },
   {
    "t": "Small 8-byte header &rarr; low overhead",
    "m": 1
   },
   {
    "t": "No flow-control slowdowns, so a steady stream is kept",
    "m": 1
   },
   {
    "t": "Losing an occasional packet only causes a tiny glitch, which is better than pausing",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "OCN401 Q20.",
  "table": null,
  "id": 24,
  "marks": 5
 },
 {
  "set": "C",
  "text": "List the three port-number ranges and give two well-known ports used by TCP and two used by UDP.",
  "fields": [],
  "points": [
   {
    "t": "Well-known 0&ndash;1023",
    "m": 1
   },
   {
    "t": "Registered 1024&ndash;49151",
    "m": 1
   },
   {
    "t": "Dynamic/private 49152&ndash;65535",
    "m": 1
   },
   {
    "t": "TCP examples: HTTP 80, HTTPS 443, FTP 20/21, SSH 22, Telnet 23, SMTP 25",
    "m": 1
   },
   {
    "t": "UDP examples: DNS 53, DHCP 67/68, TFTP 69, SNMP 161",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": null,
  "table": null,
  "id": 25,
  "marks": 5
 },
 {
  "set": "D",
  "text": "Explain the data encapsulation process as data moves down the OSI model from the Transport layer to the Physical layer. Name the PDU at each stage.",
  "fields": [
   {
    "l": "Transport layer PDU",
    "a": "segment",
    "k": "word",
    "m": 1,
    "alt": [
     "segments",
     "datagram"
    ]
   },
   {
    "l": "Network layer PDU",
    "a": "packet",
    "k": "word",
    "m": 1,
    "alt": [
     "packets"
    ]
   },
   {
    "l": "Data link layer PDU",
    "a": "frame",
    "k": "word",
    "m": 1,
    "alt": [
     "frames"
    ]
   },
   {
    "l": "Physical layer PDU",
    "a": "bits",
    "k": "word",
    "m": 1,
    "alt": [
     "bit"
    ]
   }
  ],
  "points": [
   {
    "t": "Transport adds a TCP/UDP header with source and destination <b>port numbers</b>",
    "m": 1
   },
   {
    "t": "Network adds an IP header with source and destination <b>IP addresses</b>",
    "m": 1
   },
   {
    "t": "Data link adds a header with <b>MAC addresses</b> and a trailer with the <b>FCS</b>",
    "m": 1
   },
   {
    "t": "Physical sends the frame as bits (electrical, light or radio signals)",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "Paper 2 Q44.",
  "table": null,
  "id": 26,
  "marks": 8
 },
 {
  "set": "D",
  "text": "When a frame arrives at a web server, describe what happens at each layer as the data is passed up the stack (de-encapsulation).",
  "fields": [],
  "points": [
   {
    "t": "Physical layer receives the bits and rebuilds the frame",
    "m": 1
   },
   {
    "t": "Data link checks the destination MAC and the FCS, then removes the frame header and trailer",
    "m": 1
   },
   {
    "t": "Network checks the destination IP and removes the IP header",
    "m": 1
   },
   {
    "t": "Transport uses the port number to pass the data to the right application, reassembling segments in order (TCP)",
    "m": 1
   },
   {
    "t": "Application layer gets the original data",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": null,
  "table": null,
  "id": 27,
  "marks": 5
 },
 {
  "set": "D",
  "text": "Name the seven OSI layers from top to bottom and state the job of the Network and Transport layers.",
  "fields": [
   {
    "l": "Layer 7",
    "a": "application",
    "k": "word",
    "m": 1,
    "alt": []
   },
   {
    "l": "Layer 4",
    "a": "transport",
    "k": "word",
    "m": 1,
    "alt": []
   },
   {
    "l": "Layer 2",
    "a": "data link",
    "k": "word",
    "m": 1,
    "alt": [
     "datalink",
     "data-link"
    ]
   }
  ],
  "points": [
   {
    "t": "Order: Application, Presentation, Session, Transport, Network, Data link, Physical",
    "m": 1
   },
   {
    "t": "Network layer: logical (IP) addressing and routing between networks",
    "m": 1
   },
   {
    "t": "Transport layer: segments data, port numbers, TCP/UDP, reliability and flow control",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": null,
  "table": null,
  "id": 28,
  "marks": 6
 },
 {
  "set": "D",
  "text": "Name and describe the three elements that every communication has in common, and three of the protocol requirements for effective communication.",
  "fields": [],
  "points": [
   {
    "t": "Source (sender)",
    "m": 1
   },
   {
    "t": "Destination (receiver)",
    "m": 1
   },
   {
    "t": "Channel / media",
    "m": 1
   },
   {
    "t": "Any three of: message encoding, formatting and encapsulation, message size, message timing (flow control, response timeout, access method), delivery options (unicast, multicast, broadcast)",
    "m": 3
   }
  ],
  "steps": [],
  "answer": null,
  "note": null,
  "table": null,
  "id": 29,
  "marks": 6
 },
 {
  "set": "E",
  "text": "Host A (192.168.10.25) cannot reach a web server on another network. Results: ping 127.0.0.1 succeeds; ping to the default gateway 192.168.10.1 <b>fails</b>. Which part of the network is likely at fault? Give three things you would check.",
  "fields": [],
  "points": [
   {
    "t": "The loopback works, so the host's TCP/IP stack is fine",
    "m": 1
   },
   {
    "t": "The gateway ping fails, so the fault is on the <b>local</b> network between the host and its router",
    "m": 1
   },
   {
    "t": "Check the cable / NIC / switch port (link lights, port shut down)",
    "m": 1
   },
   {
    "t": "Check the host's IP address, subnet mask and default gateway settings (same subnet as the gateway?)",
    "m": 1
   },
   {
    "t": "Check the router interface is up (no shutdown) and that the switch port is in the right VLAN",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": null,
  "table": null,
  "id": 30,
  "marks": 5
 },
 {
  "set": "E",
  "text": "A network administrator at NMU is troubleshooting Host A to a web server (Host B) on a different network. Ping 127.0.0.1: success. Ping default gateway 192.168.10.1: success. Ping Host B 172.16.50.10: request timed out. Traceroute: 1. 192.168.10.1 &nbsp;2. 10.0.0.5 (ISP router) &nbsp;3. * &nbsp;4. *. Identify where the path is failing and explain your reasoning.",
  "fields": [],
  "points": [
   {
    "t": "Loopback success: the host's TCP/IP stack works",
    "m": 1
   },
   {
    "t": "Gateway success: host settings, cabling and the local LAN are fine",
    "m": 1
   },
   {
    "t": "Traceroute reaches the ISP router 10.0.0.5, so traffic leaves the campus network",
    "m": 1
   },
   {
    "t": "The failure is <b>after</b> 10.0.0.5: next router down, no route to 172.16.50.0, a firewall blocking ICMP, or Host B / its network down",
    "m": 1
   },
   {
    "t": "It is not Host A or the local LAN; next step is to contact the ISP or test Host B from elsewhere",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "OCN401 Q24, word for word.",
  "table": null,
  "id": 31,
  "marks": 5
 },
 {
  "set": "E",
  "text": "A user can ping <b>8.8.8.8</b> successfully but cannot open <b>www.google.com</b> in a browser. Ping to the name also fails. What is the most likely problem and how would you confirm it?",
  "fields": [],
  "points": [
   {
    "t": "Connectivity by IP works, so routing and the gateway are fine",
    "m": 1
   },
   {
    "t": "Name resolution is failing &rarr; a <b>DNS</b> problem",
    "m": 1
   },
   {
    "t": "Check the DNS server address in the host's IP settings (ipconfig /all)",
    "m": 1
   },
   {
    "t": "Confirm with <b>nslookup www.google.com</b>",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": null,
  "table": null,
  "id": 32,
  "marks": 4
 },
 {
  "set": "E",
  "text": "Ping 127.0.0.1 on a PC fails. What does this tell you, and does it make sense to troubleshoot the network cable first?",
  "fields": [],
  "points": [
   {
    "t": "The PC's own TCP/IP stack / network software is not working",
    "m": 1
   },
   {
    "t": "No &mdash; the loopback test never leaves the PC, so the cable isn't involved; fix the host first (TCP/IP settings, NIC driver)",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": null,
  "table": null,
  "id": 33,
  "marks": 2
 },
 {
  "set": "E",
  "text": "Traceroute uses the ICMP Time Exceeded message. Explain in detail how traceroute discovers each hop in a path, including the header field it changes and the replies it expects.",
  "fields": [],
  "points": [
   {
    "t": "The first probe is sent with <b>TTL = 1</b>",
    "m": 1
   },
   {
    "t": "The first router decrements TTL to 0, drops the packet and sends ICMP <b>Time Exceeded</b> &mdash; that's hop 1 (with its round-trip time)",
    "m": 1
   },
   {
    "t": "The next probe has TTL = 2, then 3, and so on, revealing one more router each time",
    "m": 1
   },
   {
    "t": "The destination replies with an ICMP Echo Reply (Windows tracert) or Port Unreachable, which ends the trace (or the 30-hop maximum)",
    "m": 1
   },
   {
    "t": "<b>*</b> means no reply within the timeout (lost, filtered or the device doesn't send ICMP)",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "OCN401 Q26 (7 marks).",
  "table": null,
  "id": 34,
  "marks": 5
 },
 {
  "set": "E",
  "text": "Distinguish between the ICMP <b>Destination Unreachable</b> and <b>Time Exceeded</b> messages. When is each generated?",
  "fields": [],
  "points": [
   {
    "t": "Destination Unreachable: a router or host cannot deliver the packet",
    "m": 1
   },
   {
    "t": "e.g. no route to the network, host down, protocol or port not available",
    "m": 1
   },
   {
    "t": "Time Exceeded: a router drops a packet because its TTL (IPv4) / hop limit (IPv6) reached 0",
    "m": 1
   },
   {
    "t": "Time Exceeded is what traceroute relies on; it also stops routing loops lasting forever",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "OCN401 Q18.",
  "table": null,
  "id": 35,
  "marks": 4
 },
 {
  "set": "E",
  "text": "When a host tests connectivity to its default gateway versus a remote host on the internet, what does a successful ping to each tell you?",
  "fields": [],
  "points": [
   {
    "t": "Gateway success: the host's settings, NIC, cable, switch and the local LAN all work, and the router is reachable",
    "m": 1
   },
   {
    "t": "Remote success: the whole path works &mdash; routing both ways, the internet path and the remote host",
    "m": 1
   },
   {
    "t": "If the gateway works but the remote fails, the problem is beyond the local network",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "OCN401 Q22.",
  "table": null,
  "id": 36,
  "marks": 3
 },
 {
  "set": "F",
  "text": "Explain the process of IPv6 Stateless Address Autoconfiguration (SLAAC). How does a host determine its 64-bit interface ID using EUI-64?",
  "fields": [],
  "points": [
   {
    "t": "Host creates a link-local address (FE80::/10) and checks it with DAD (Neighbor Solicitation)",
    "m": 1
   },
   {
    "t": "Host sends a Router Solicitation (RS)",
    "m": 1
   },
   {
    "t": "Router replies with a Router Advertisement (RA) containing the prefix, prefix length and default gateway (router's link-local address)",
    "m": 1
   },
   {
    "t": "Host builds the 64-bit interface ID itself (EUI-64 or random) and adds it to the prefix",
    "m": 1
   },
   {
    "t": "EUI-64: split the MAC in half, insert FFFE, flip the 7th bit",
    "m": 1
   },
   {
    "t": "Host runs DAD on the new address; no server keeps track of it (stateless)",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "OCN401 Q25 (7 marks).",
  "table": null,
  "id": 37,
  "marks": 6
 },
 {
  "set": "F",
  "text": "Compare Stateless DHCPv6 and Stateful DHCPv6. What is the primary difference in how they manage IP address assignment?",
  "fields": [],
  "points": [
   {
    "t": "Stateless: the address comes from SLAAC (the RA); the DHCPv6 server only gives other info such as DNS",
    "m": 1
   },
   {
    "t": "Stateless: the server does not track which address each host has",
    "m": 1
   },
   {
    "t": "Stateful: the DHCPv6 server assigns the global unicast address and keeps a record of it (like DHCPv4)",
    "m": 1
   },
   {
    "t": "In both, the default gateway comes from the router's RA",
    "m": 1
   },
   {
    "t": "RA flags: O flag = stateless DHCPv6, M flag = stateful DHCPv6",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "OCN401 Q19.",
  "table": null,
  "id": 38,
  "marks": 5
 },
 {
  "set": "F",
  "text": "Identify and briefly describe the three types of IPv6 unicast address: GUA, LLA and ULA.",
  "fields": [],
  "points": [
   {
    "t": "GUA (global unicast, 2000::/3): globally unique, routable on the internet, like a public IPv4 address",
    "m": 1
   },
   {
    "t": "GUA structure: global routing prefix (usually /48) + subnet ID + interface ID",
    "m": 1
   },
   {
    "t": "LLA (link-local, FE80::/10): only valid on the local link, created automatically, never routed",
    "m": 1
   },
   {
    "t": "The router's LLA is normally used as the hosts' default gateway",
    "m": 1
   },
   {
    "t": "ULA (unique local, FC00::/7): like an IPv4 private address, not routed on the internet",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "Paper 2 Q37 and OCN401 Q17.",
  "table": null,
  "id": 39,
  "marks": 5
 },
 {
  "set": "F",
  "text": "Explain the two rules used to compress an IPv6 address. Give an example of each.",
  "fields": [],
  "points": [
   {
    "t": "Rule 1: leading zeros in any hextet can be left out (e.g. 0db8 &rarr; db8, 0001 &rarr; 1)",
    "m": 1
   },
   {
    "t": "Trailing zeros cannot be dropped",
    "m": 1
   },
   {
    "t": "Rule 2: one run of all-zero hextets can be replaced by ::",
    "m": 1
   },
   {
    "t": ":: can be used only once in an address (otherwise it's ambiguous)",
    "m": 1
   },
   {
    "t": "Example: 2001:0db8:0000:0000:0000:0000:0000:0001 &rarr; 2001:db8::1",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "OCN401 Q16.",
  "table": null,
  "id": 40,
  "marks": 5
 },
 {
  "set": "F",
  "text": "Name the four ICMPv6 Neighbor Discovery messages and say what each is used for.",
  "fields": [],
  "points": [
   {
    "t": "Router Solicitation (RS): host asks routers to send an RA",
    "m": 1
   },
   {
    "t": "Router Advertisement (RA): router sends prefix, prefix length, gateway (every 200 s or in reply to an RS)",
    "m": 1
   },
   {
    "t": "Neighbor Solicitation (NS): asks for the MAC address of an IPv6 address (replaces the ARP request); also used for DAD",
    "m": 1
   },
   {
    "t": "Neighbor Advertisement (NA): replies with the MAC address (replaces the ARP reply)",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": null,
  "table": null,
  "id": 41,
  "marks": 4
 },
 {
  "set": "G",
  "text": "Scenario: S1 F0/1 connects to R1 G0/0/1. VLAN 30 (Sales) is 192.168.30.0/24 and VLAN 40 (HR) is 192.168.40.0/24; VLAN 99 is the native VLAN. PC1 is on S1 F0/5 (Sales) and PC2 on S1 F0/15 (HR). Write the commands to configure router-on-a-stick so the PCs can reach each other. Use the first usable address as each gateway.",
  "fields": [],
  "points": [
   {
    "t": "VLANs 30, 40 and 99 created on S1",
    "m": 1
   },
   {
    "t": "F0/5 access VLAN 30 and F0/15 access VLAN 40",
    "m": 1
   },
   {
    "t": "F0/1 set to trunk with native VLAN 99",
    "m": 1
   },
   {
    "t": "One subinterface per VLAN with <b>encapsulation dot1Q</b> and the matching VLAN ID",
    "m": 1
   },
   {
    "t": "Subinterface IPs 192.168.30.1 and 192.168.40.1 (the PCs' gateways)",
    "m": 1
   },
   {
    "t": "<b>no shutdown</b> on the physical G0/0/1",
    "m": 1
   }
  ],
  "steps": [],
  "answer": "<pre class='ascii'>S1(config)# vlan 30\nS1(config-vlan)# name Sales\nS1(config)# vlan 40\nS1(config-vlan)# name HR\nS1(config)# vlan 99\nS1(config)# interface f0/5\nS1(config-if)# switchport mode access\nS1(config-if)# switchport access vlan 30\nS1(config)# interface f0/15\nS1(config-if)# switchport mode access\nS1(config-if)# switchport access vlan 40\nS1(config)# interface f0/1\nS1(config-if)# switchport mode trunk\nS1(config-if)# switchport trunk native vlan 99\n\nR1(config)# interface g0/0/1.30\nR1(config-subif)# encapsulation dot1Q 30\nR1(config-subif)# ip address 192.168.30.1 255.255.255.0\nR1(config)# interface g0/0/1.40\nR1(config-subif)# encapsulation dot1Q 40\nR1(config-subif)# ip address 192.168.40.1 255.255.255.0\nR1(config)# interface g0/0/1.99\nR1(config-subif)# encapsulation dot1Q 99 native\nR1(config)# interface g0/0/1\nR1(config-if)# no shutdown</pre>",
  "note": "Same shape as the NMU computer-lab scenario in the practice paper.",
  "table": null,
  "id": 42,
  "marks": 6
 },
 {
  "set": "G",
  "text": "Explain the function of the command <b>encapsulation dot1q 10</b> when configuring a router subinterface for router-on-a-stick.",
  "fields": [],
  "points": [
   {
    "t": "It ties the subinterface to <b>VLAN 10</b>",
    "m": 1
   },
   {
    "t": "Frames arriving on the trunk tagged with VLAN 10 are handled by this subinterface",
    "m": 1
   },
   {
    "t": "Frames sent out of this subinterface are tagged with VLAN 10 (802.1Q)",
    "m": 1
   },
   {
    "t": "So the subinterface's IP address becomes the default gateway for VLAN 10",
    "m": 1
   },
   {
    "t": "It must be configured before the IP address on the subinterface",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "Paper 1 Q21.",
  "table": null,
  "id": 43,
  "marks": 5
 },
 {
  "set": "G",
  "text": "Configure R1 as a DHCPv4 server for the LAN 192.168.50.0/24: pool name LAN50, default gateway 192.168.50.1, DNS server 8.8.8.8, and keep 192.168.50.1&ndash;192.168.50.10 for static devices. Then configure R2 so hosts on its G0/0 LAN get addresses from R1 (R1's address facing R2 is 10.1.1.1).",
  "fields": [],
  "points": [
   {
    "t": "<b>ip dhcp excluded-address</b> 192.168.50.1 192.168.50.10 (entered before the pool)",
    "m": 1
   },
   {
    "t": "<b>ip dhcp pool LAN50</b>",
    "m": 1
   },
   {
    "t": "<b>network</b> 192.168.50.0 255.255.255.0",
    "m": 1
   },
   {
    "t": "<b>default-router</b> 192.168.50.1 and <b>dns-server</b> 8.8.8.8",
    "m": 1
   },
   {
    "t": "Relay on R2's LAN interface: <b>ip helper-address 10.1.1.1</b>",
    "m": 1
   }
  ],
  "steps": [],
  "answer": "<pre class='ascii'>R1(config)# ip dhcp excluded-address 192.168.50.1 192.168.50.10\nR1(config)# ip dhcp pool LAN50\nR1(dhcp-config)# network 192.168.50.0 255.255.255.0\nR1(dhcp-config)# default-router 192.168.50.1\nR1(dhcp-config)# dns-server 8.8.8.8\n\nR2(config)# interface g0/0\nR2(config-if)# ip helper-address 10.1.1.1\n\n! verify: show ip dhcp binding</pre>",
  "note": null,
  "table": null,
  "id": 44,
  "marks": 5
 },
 {
  "set": "G",
  "text": "An inside web server 192.168.1.10 must be reachable from the internet at the public address 209.165.200.5. R1's G0/0 faces the inside LAN and S0/0/0 faces the ISP. Write the static NAT configuration and the command to verify it.",
  "fields": [],
  "points": [
   {
    "t": "<b>ip nat inside source static 192.168.1.10 209.165.200.5</b> (inside local first, then inside global)",
    "m": 1
   },
   {
    "t": "<b>ip nat inside</b> on G0/0",
    "m": 1
   },
   {
    "t": "<b>ip nat outside</b> on S0/0/0",
    "m": 1
   },
   {
    "t": "Verify with <b>show ip nat translations</b>",
    "m": 1
   }
  ],
  "steps": [],
  "answer": "<pre class='ascii'>R1(config)# ip nat inside source static 192.168.1.10 209.165.200.5\nR1(config)# interface g0/0\nR1(config-if)# ip nat inside\nR1(config)# interface s0/0/0\nR1(config-if)# ip nat outside\nR1# show ip nat translations</pre>",
  "note": null,
  "table": null,
  "id": 45,
  "marks": 4
 },
 {
  "set": "G",
  "text": "R1 has these connected networks: 192.168.1.0/24 on G0/0 (a LAN with only PCs), 10.0.0.0/30 on S0/0/0 to R2, a loopback 172.16.1.1/32, and S0/0/1 to the ISP. Configure RIPv2 to advertise all networks except the ISP link, stop RIP updates going out to the LAN, turn off auto-summary, add a default route out S0/0/1 and share it with the other routers.",
  "fields": [],
  "points": [
   {
    "t": "<b>router rip</b> and <b>version 2</b>",
    "m": 1
   },
   {
    "t": "<b>network</b> statements for 192.168.1.0, 10.0.0.0 and 172.16.0.0 (classful), not the ISP link",
    "m": 1
   },
   {
    "t": "<b>no auto-summary</b>",
    "m": 1
   },
   {
    "t": "<b>passive-interface g0/0</b>",
    "m": 1
   },
   {
    "t": "<b>ip route 0.0.0.0 0.0.0.0 s0/0/1</b>",
    "m": 1
   },
   {
    "t": "<b>default-information originate</b> under router rip",
    "m": 1
   }
  ],
  "steps": [],
  "answer": "<pre class='ascii'>R1(config)# router rip\nR1(config-router)# version 2\nR1(config-router)# network 192.168.1.0\nR1(config-router)# network 10.0.0.0\nR1(config-router)# network 172.16.0.0\nR1(config-router)# no auto-summary\nR1(config-router)# passive-interface g0/0\nR1(config-router)# default-information originate\nR1(config)# ip route 0.0.0.0 0.0.0.0 s0/0/1</pre>",
  "note": "Same pieces as your case study.",
  "table": null,
  "id": 46,
  "marks": 6
 },
 {
  "set": "G",
  "text": "Give a new switch the hostname S1, an encrypted privileged-mode password <b>Class1</b>, a console password <b>cisco</b> that is actually enforced, the same password on the Telnet lines, encrypt all plain-text passwords, add a warning banner, and save.",
  "fields": [],
  "points": [
   {
    "t": "<b>hostname S1</b>",
    "m": 1
   },
   {
    "t": "<b>enable secret Class1</b> (secret, not password, so it's encrypted)",
    "m": 1
   },
   {
    "t": "<b>line console 0</b> + <b>password cisco</b> + <b>login</b>",
    "m": 1
   },
   {
    "t": "<b>line vty 0 15</b> + password + login",
    "m": 1
   },
   {
    "t": "<b>service password-encryption</b>",
    "m": 1
   },
   {
    "t": "<b>banner motd</b> with delimiters",
    "m": 1
   },
   {
    "t": "<b>copy running-config startup-config</b>",
    "m": 1
   }
  ],
  "steps": [],
  "answer": "<pre class='ascii'>Switch(config)# hostname S1\nS1(config)# enable secret Class1\nS1(config)# line console 0\nS1(config-line)# password cisco\nS1(config-line)# login\nS1(config)# line vty 0 15\nS1(config-line)# password cisco\nS1(config-line)# login\nS1(config)# service password-encryption\nS1(config)# banner motd \"Authorized access only!\"\nS1# copy running-config startup-config</pre>",
  "note": null,
  "table": null,
  "id": 47,
  "marks": 7
 },
 {
  "set": "H",
  "text": "Students are plugging unauthorised switches into access ports F0/5&ndash;F0/24 on the library switch. Configure the ports so: they are access ports with DTP off; at most 2 MAC addresses are allowed, learned dynamically but kept after a reboot; a violation shuts the port and logs it; and STP is protected from rogue switches.",
  "fields": [],
  "points": [
   {
    "t": "<b>switchport mode access</b> and <b>switchport nonegotiate</b>",
    "m": 1
   },
   {
    "t": "<b>switchport port-security</b> enabled",
    "m": 1
   },
   {
    "t": "<b>maximum 2</b>",
    "m": 1
   },
   {
    "t": "<b>mac-address sticky</b> + save the config so they survive a reboot",
    "m": 1
   },
   {
    "t": "<b>violation shutdown</b> (the default: error-disabled + log message)",
    "m": 1
   },
   {
    "t": "<b>spanning-tree portfast</b> + <b>bpduguard enable</b>",
    "m": 1
   }
  ],
  "steps": [],
  "answer": "<pre class='ascii'>Switch(config)# interface range f0/5 - 24\nSwitch(config-if-range)# switchport mode access\nSwitch(config-if-range)# switchport nonegotiate\nSwitch(config-if-range)# switchport port-security\nSwitch(config-if-range)# switchport port-security maximum 2\nSwitch(config-if-range)# switchport port-security mac-address sticky\nSwitch(config-if-range)# switchport port-security violation shutdown\nSwitch(config-if-range)# spanning-tree portfast\nSwitch(config-if-range)# spanning-tree bpduguard enable\nSwitch# copy running-config startup-config</pre>",
  "note": "The library hardening scenario from Paper 1.",
  "table": null,
  "id": 48,
  "marks": 6
 },
 {
  "set": "H",
  "text": "Contrast DHCP starvation attacks and DHCP spoofing attacks, and identify the main mitigation for each.",
  "fields": [],
  "points": [
   {
    "t": "Starvation: attacker floods DHCP Discover messages with fake MAC addresses",
    "m": 1
   },
   {
    "t": "&hellip;until the DHCP pool runs out, so real clients get no address",
    "m": 1
   },
   {
    "t": "Mitigation for starvation: <b>port security</b> (limit MACs per port)",
    "m": 1
   },
   {
    "t": "Spoofing: a rogue DHCP server hands out a fake default gateway / DNS to redirect traffic",
    "m": 1
   },
   {
    "t": "Mitigation for spoofing: <b>DHCP snooping</b> (only trusted ports may send DHCP server replies)",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "Paper 1 Q25.",
  "table": null,
  "id": 49,
  "marks": 5
 },
 {
  "set": "H",
  "text": "Identify and explain the three types of VLAN hopping attack, and how to stop them.",
  "fields": [],
  "points": [
   {
    "t": "Spoofed <b>DTP</b> messages make the switch form a trunk with the attacker's host",
    "m": 1
   },
   {
    "t": "A <b>rogue switch</b> is plugged in and set to trunk",
    "m": 1
   },
   {
    "t": "<b>Double-tagging</b>: two 802.1Q tags; the first switch strips the outer (native VLAN) tag and forwards the inner one",
    "m": 1
   },
   {
    "t": "Mitigation: disable DTP (<b>switchport nonegotiate</b>), make user ports access ports, shut unused ports",
    "m": 1
   },
   {
    "t": "Set the native VLAN to an unused VLAN other than VLAN 1",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "Paper 1 Q23.",
  "table": null,
  "id": 50,
  "marks": 5
 },
 {
  "set": "H",
  "text": "What is the purpose of STP PortFast, why should it only be used on access ports, and what does BPDU Guard add?",
  "fields": [],
  "points": [
   {
    "t": "PortFast makes a port go straight to forwarding, skipping listening and learning",
    "m": 1
   },
   {
    "t": "So PCs get connectivity (and DHCP) immediately",
    "m": 1
   },
   {
    "t": "On a link to another switch it could cause a <b>switching loop</b>, so access ports only",
    "m": 1
   },
   {
    "t": "BPDU Guard error-disables a PortFast port as soon as it receives a BPDU (stops rogue switches)",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "Paper 1 Q26.",
  "table": null,
  "id": 51,
  "marks": 4
 },
 {
  "set": "H",
  "text": "List the five port states of 802.1D STP and explain the difference between a root port and a designated port.",
  "fields": [],
  "points": [
   {
    "t": "Blocking, listening, learning, forwarding, disabled",
    "m": 2
   },
   {
    "t": "Root bridge = lowest bridge ID; all its ports are designated",
    "m": 1
   },
   {
    "t": "Root port: on each non-root switch, the one port with the best path to the root bridge",
    "m": 1
   },
   {
    "t": "Designated port: the forwarding port on each network segment",
    "m": 1
   }
  ],
  "steps": [],
  "answer": null,
  "note": "Paper 2 Q39 and Q40.",
  "table": null,
  "id": 52,
  "marks": 5
 },
 {
  "set": "H",
  "text": "Describe the advantages of the <b>sticky</b> keyword in port security compared with ordinary dynamic learning, and list three validation checks Dynamic ARP Inspection can perform.",
  "fields": [],
  "points": [
   {
    "t": "Sticky MACs are learned automatically (no typing every address)",
    "m": 1
   },
   {
    "t": "They are written into the running configuration",
    "m": 1
   },
   {
    "t": "Once saved to startup-config they survive a reboot; dynamic ones are always lost",
    "m": 1
   },
   {
    "t": "DAI checks: destination MAC, source MAC, and IP address",
    "m": 2
   }
  ],
  "steps": [],
  "answer": null,
  "note": "Paper 1 Q22 and Q27.",
  "table": null,
  "id": 53,
  "marks": 5
 },
 {
  "set": "H",
  "text": "Outline the commands to convert a Layer 2 switchport on a Layer 3 switch into a routed port, and list three characteristics of VLAN 1.",
  "fields": [],
  "points": [
   {
    "t": "<b>ip routing</b> (global)",
    "m": 1
   },
   {
    "t": "<b>no switchport</b> on the interface",
    "m": 1
   },
   {
    "t": "<b>ip address</b> + <b>no shutdown</b>",
    "m": 1
   },
   {
    "t": "VLAN 1: every port is in it by default; it's the default native and management VLAN; it can't be deleted or renamed",
    "m": 2
   }
  ],
  "steps": [],
  "answer": "<pre class='ascii'>Switch(config)# ip routing\nSwitch(config)# interface g0/1\nSwitch(config-if)# no switchport\nSwitch(config-if)# ip address 10.1.1.1 255.255.255.0\nSwitch(config-if)# no shutdown</pre>",
  "note": "Paper 1 Q24 and Q28.",
  "table": null,
  "id": 54,
  "marks": 5
 }
];
