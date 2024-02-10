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
    //create rows (containers) for the elements
    let container1=document.createElement("div");
    let container2=document.createElement("div");
    let container3=document.createElement("div");
    let container4=document.createElement("div");
    let container5=document.createElement("div");
    let container6=document.createElement("div");
    let container7=document.createElement("div");
    let container8=document.createElement("div");
    let container9=document.createElement("div");

    //add classes for the elements
    container1.classList.add("container1");
    container2.classList.add("container2");
    container2.classList.add("container2");
    container3.classList.add("container3");
    container4.classList.add("container4");
    container5.classList.add("container5");
    container6.classList.add("container6");
    container7.classList.add("container7");
    container8.classList.add("container8");
    container9.classList.add("container9");

    //append rows(containers) to the body
    body.appendChild(container1);
    body.appendChild(container2);
    body.appendChild(container3);
    body.appendChild(container4);
    body.appendChild(container5);
    body.appendChild(container6);
    body.appendChild(container7);
    body.appendChild(container8);
    body.appendChild(container9);

  //create subcontainers
    //second row
    let subcontainer2_1=document.createElement("div");
    let subcontainer2_2=document.createElement("div");
    //third row
    let subcontainer3_1=document.createElement("div");
    let subcontainer3_2=document.createElement("div");

  //append subcontainers to the matching container and add their class
    //second row
    container2.appendChild(subcontainer2_1);
    container2.appendChild(subcontainer2_2);
    subcontainer2_1.classList.add("subcontainer2_1");
    subcontainer2_2.classList.add("subcontainer2_2");
    //third row
    container3.appendChild(subcontainer3_1);
    container3.appendChild(subcontainer3_2);


  periodictable.forEach((element,index)=>{
    //maincontainer create and addclass
      let maincontainer=document.createElement("div");
      maincontainer.classList.add("maincontainer");
 
    //thecard create and addclass
      let thecard=document.createElement("div");
      thecard.classList.add("thecard");
      maincontainer.appendChild(thecard);

    //front and back of the cards
      let frontdiv=document.createElement("div");
      frontdiv.classList.add("frontdiv");
      let backdiv=document.createElement("div");
      backdiv.classList.add("backdiv");
      thecard.appendChild(frontdiv);
      thecard.appendChild(backdiv);

    //create text for cards and insert it
      //front of the card
      let shortnameP=document.createElement("p");
      let shorthameText=document.createTextNode(element.shortenedname);
      frontdiv.appendChild(shortnameP);
      shortnameP.appendChild(shorthameText);
      //back of the card
        //Fullname creating
      let fullname=document.createElement("p");
      let fullnameText=document.createTextNode(element.name);
      backdiv.appendChild(fullname);
      fullname.appendChild(fullnameText);
      fullname.classList.add("fullname");
        //Atomic number
      let atomicnr=document.createElement("p");
      let atomicnrtext=document.createTextNode(`Z:${element.z}`);
      backdiv.appendChild(atomicnr);
      atomicnr.appendChild(atomicnrtext);
      atomicnr.classList.add("atomicnr");
        //Atomic mass
      let atomicmass=document.createElement("p");
      let atomicmasstext=document.createTextNode(`A:${element.a}`);
      backdiv.appendChild(atomicmass);
      atomicmass.appendChild(atomicmasstext);
      atomicmass.classList.add("atomicmass");
        //Configuration
      let configuration=document.createElement("p");
      let configurationtext=document.createTextNode(`${element.configuration}`);
      backdiv.appendChild(configuration);
      configuration.appendChild(configurationtext);
      configuration.classList.add("configuration");
     
        
    //Append elements to different rows (containers) created before
    if(index===0 || index===1){
        container1.appendChild(maincontainer);
    }else if(index==2 || index===3){
        subcontainer2_1.appendChild(maincontainer);
    }else if(index>=4 && index<=9){
        subcontainer2_2.appendChild(maincontainer);
    }else if(index===10 || index===11){
        subcontainer3_1.appendChild(maincontainer);
    }else if(index>11 && index <=17){
        subcontainer3_2.appendChild(maincontainer);
    } else if(index>17 && index<=35){
        container4.appendChild(maincontainer);
    }else if(index>35 && index<=53){
        container5.appendChild(maincontainer);
    }
   

   //Add classes for different types of elements (ex:metal,non-metal)
   if(element.type==="Non-metal"){
      maincontainer.classList.add("Nonmetal");
   }else if(element.type==="Noble gas"){
      maincontainer.classList.add("Noblegas");
   }else if(element.type==="Alkali-metal"){
      maincontainer.classList.add("Alkalimetal");
   }else if(element.type==="Alkali-earth-metal"){
      maincontainer.classList.add("Alkaliearthmetal");
   }else if(element.type==="Metalloid"){
      maincontainer.classList.add("Metalloid");
   }else if(element.type==="Halogen"){
      maincontainer.classList.add("Halogen");
   }else if(element.type==="Metal"){
      maincontainer.classList.add("Metal");
   }else if(element.type==="Transition-metal"){
      maincontainer.classList.add("Transitionmetal");
   }else if(element.type==="Lanthanide"){
      maincontainer.classList.add("Lanthanide");
   }else if(element.type==="Actinide"){
      maincontainer.classList.add("Actinide");
   }
  })