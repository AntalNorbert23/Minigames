const periodictable=[
      {
        shortenedname:"H",
        name:"Hydrogen",
        a:1,
        z:1,
        n:0,
        configuration:"1s",
        type:"Non-metal",
      },
      {
        shortenedname:"He",
        name:"Helium",
        a:4,
        z:2,
        n:2,
        configuration:"1s2",
        type:"Noble gas",
      },
      {
        shortenedname:"Li",
        name:"Lithium",
        a:7,
        z:3,
        n:4,
        configuration:"1s2-2s1",
        type:"Alkali-metal",
      },
      {
        shortenedname:"Be",
        name:"Beryllium",
        a:9,
        z:4,
        n:5,
        configuration:"1s2-2s2",
        type:"Alkali-earth-metal",
      },
      {
        shortenedname:"B",
        name:"Boron",
        a:11,
        z:5,
        n:6,
        configuration:"1s2-2s2-2p1",
        type:"Metalloid",
      },
      {
        shortenedname:"C",
        name:"Carbon",
        a:12,
        z:6,
        n:6,
        configuration:"1s2-2s2-2p2",
        type:"Non-metal",
      },
      {
        shortenedname:"N",
        name:"Nitrogen",
        a:14,
        z:7,
        n:7,
        configuration:"1s2-2s2-2p3",
        type:"Non-metal",
      },
      {
        shortenedname:"O",
        name:"Oxygen",
        a:16,
        z:8,
        n:8,
        configuration:"1s2-2s2-2p4",
        type:"Non-metal",
      },
      {
        shortenedname:"F",
        name:"Fluorine",
        a:19,
        z:9,
        n:10,
        configuration:"1s2-2s2-2p5",
        type:"Halogen",
      },
      {
        shortenedname:"Ne",
        name:"Neon",
        a:20,
        z:10,
        n:10,
        configuration:"1s2-2s2-2p6",
        type:"Noble gas",
      },
      {
        shortenedname:"Na",
        name:"Sodium",
        a:23,
        z:11,
        n:12,
        configuration:"1s2-2s2-2p6-3s1",
        type:"Alkali-metal",
      },
      {
        shortenedname:"Mg",
        name:"Magnesium",
        a:24,
        z:12,
        n:12,
        configuration:"1s2-2s2-2p6-3s2",
        type:"Alkali-earth-metal",
      },
      {
        shortenedname:"Al",
        name:"Aluminium",
        a:27,
        z:13,
        n:14,
        configuration:"1s2-2s2-2p6-3s2-3p1",
        type:"Metal",
      },
      {
        shortenedname:"Si",
        name:"Silicon",
        a:28,
        z:14,
        n:14,
        configuration:"1s2-2s2-2p6-3s2-3p2",
        type:"Metalloid",
      },
      {
        shortenedname:"P",
        name:"Phosphorus",
        a:31,
        z:15,
        n:16,
        configuration:"1s2-2s2-2p6-3s2-3p3",
        type:"Non-metal",
      },
      {
        shortenedname:"S",
        name:"Sulfur",
        a:32,
        z:16,
        n:16,
        configuration:"1s2-2s2-2p6-3s2-3p4",
        type:"Non-metal",
      },
      {
        shortenedname:"Cl",
        name:"Chlorine",
        a:35.5,
        z:17,
        n:18.5,
        configuration:"1s2-2s2-2p6-3s2-3p5",
        type:"Halogen",
      },
      {
        shortenedname:"Ar",
        name:"Argon",
        a:40,
        z:18,
        n:22,
        configuration:"1s2-2s2-2p6-3s2-3p6",
        type:"Noble gas",
      },
];
    const body=document.body;
    let container=document.createElement("div");
    container.classList.add("container");
    body.appendChild(container);

  periodictable.forEach((element,index)=>{
    //maincontainer create and addclass
      let maincontainer=document.createElement("div");
      maincontainer.classList.add("maincontainer");
      container.appendChild(maincontainer);

    //thecard create and addclass
      let thecard=document.createElement("div");
      thecard.classList.add("thecard");
      maincontainer.appendChild(thecard);

    //front and back of the cards
      let frontdiv=document.createElement("div");
      frontdiv.classList.add("frontdiv");
      let backdiv=document.createElement("div");
      backdiv.classList.add("frontdiv");
      thecard.appendChild(frontdiv);
      thecard.appendChild(backdiv);

    //create text for cards and insert it
      let shortnameP=document.createElement("p");
      let shorthameText=document.createTextNode(element.shortenedname);
      frontdiv.appendChild(shortnameP);
      shortnameP.appendChild(shorthameText);
  })