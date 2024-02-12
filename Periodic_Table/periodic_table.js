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
    configuration:"[He]2s1",
    type:"Alkali-metal",
  },
  {
    shortenedname:"Be",
    name:"Beryllium",
    a:9,
    z:4,
    n:5,
    configuration:"[He]2s2",
    type:"Alkaline-earth-metal",
  },
  {
    shortenedname:"B",
    name:"Boron",
    a:11,
    z:5,
    n:6,
    configuration:"[He]2s2-2p1",
    type:"Metalloid",
  },
  {
    shortenedname:"C",
    name:"Carbon",
    a:12,
    z:6,
    n:6,
    configuration:"[He]2s2-2p2",
    type:"Non-metal",
  },
  {
    shortenedname:"N",
    name:"Nitrogen",
    a:14,
    z:7,
    n:7,
    configuration:"[He]2s2-2p3",
    type:"Non-metal",
  },
  {
    shortenedname:"O",
    name:"Oxygen",
    a:16,
    z:8,
    n:8,
    configuration:"[He]2s2-2p4",
    type:"Non-metal",
  },
  {
    shortenedname:"F",
    name:"Fluorine",
    a:19,
    z:9,
    n:10,
    configuration:"[He]2s2-2p5",
    type:"Halogen",
  },
  {
    shortenedname:"Ne",
    name:"Neon",
    a:20,
    z:10,
    n:10,
    configuration:"[He]2s2-2p6",
    type:"Noble gas",
  },
  {
    shortenedname:"Na",
    name:"Sodium",
    a:23,
    z:11,
    n:12,
    configuration:"[Ne]3s1",
    type:"Alkali-metal",
  },
  {
    shortenedname:"Mg",
    name:"Magnesium",
    a:24,
    z:12,
    n:12,
    configuration:"[Ne]3s2",
    type:"Alkaline-earth-metal",
  },
  {
    shortenedname:"Al",
    name:"Aluminium",
    a:27,
    z:13,
    n:14,
    configuration:"[Ne]3s2-3p1",
    type:"Metal",
  },
  {
    shortenedname:"Si",
    name:"Silicon",
    a:28,
    z:14,
    n:14,
    configuration:"[Ne]3s2-3p2",
    type:"Metalloid",
  },
  {
    shortenedname:"P",
    name:"Phosphorus",
    a:31,
    z:15,
    n:16,
    configuration:"[Ne]3s2-3p3",
    type:"Non-metal",
  },
  {
    shortenedname:"S",
    name:"Sulfur",
    a:32,
    z:16,
    n:16,
    configuration:"[Ne]3s2-3p4",
    type:"Non-metal",
  },
  {
    shortenedname:"Cl",
    name:"Chlorine",
    a:35.5,
    z:17,
    n:18.5,
    configuration:"[Ne]3s2-3p5",
    type:"Halogen",
  },
  {
    shortenedname:"Ar",
    name:"Argon",
    a:40,
    z:18,
    n:22,
    configuration:"[Ne]3s2-3p6",
    type:"Noble gas",
  },
  {
    shortenedname:"K",
    name:"Potassium",
    a:39,
    z:19,
    n:20,
    configuration:"[Ar]4s1",
    type:"Alkali-metal",
  },
  {
    shortenedname:"Ca",
    name:"Calcium",
    a:40,
    z:20,
    n:20,
    configuration:"[Ar]4s2",
    type:"Alkaline-earth-metal",
  },
  {
    shortenedname:"Sc",
    name:"Scandium",
    a:45,
    z:21,
    n:24,
    configuration:"[Ar]3d1-4s2",
    type:"Transition-metal",
  },
  {
    shortenedname:"Ti",
    name:"Titanium",
    a:48,
    z:22,
    n:26,
    configuration:"[Ar]3d2-4s2",
    type:"Transition-metal",
  },
  {
    shortenedname:"V",
    name:"Vanadium",
    a:51,
    z:23,
    n:28,
    configuration:"[Ar]3d3-4s2",
    type:"Transition-metal",
  },
  {
    shortenedname:"Cr",
    name:"Chromium",
    a:52,
    z:24,
    n:28,
    configuration:"[Ar]3d5-4s1",
    type:"Transition-metal",
  },
  {
    shortenedname:"Mn",
    name:"Manganese",
    a:55,
    z:25,
    n:30,
    configuration:"[Ar]3d5-4s2",
    type:"Transition-metal",
  },
  {
    shortenedname:"Fe",
    name:"Iron",
    a:56,
    z:26,
    n:30,
    configuration:"[Ar]3d6-4s2",
    type:"Transition-metal",
  },
  {
    shortenedname:"Co",
    name:"Cobalt",
    a:59,
    z:27,
    n:32,
    configuration:"[Ar]3d7-4s2",
    type:"Transition-metal",
  },
  {
    shortenedname:"Ni",
    name:"Nickel",
    a:59,
    z:28,
    n:31,
    configuration:"[Ar]3d8-4s2",
    type:"Transition-metal",
  },
  {
    shortenedname:"Cu",
    name:"Copper",
    a:63.5,
    z:29,
    n:35,
    configuration:"[Ar]3d10-4s1",
    type:"Transition-metal",
  },
  {
    shortenedname:"Zn",
    name:"Zinc",
    a:65,
    z:30,
    n:35,
    configuration:"[Ar]3d10-4s2",
    type:"Transition-metal",
  },
  {
    shortenedname:"Ga",
    name:"Gallium",
    a:70,
    z:31,
    n:39,
    configuration:"[Ar]3d10-4s2-4p1",
    type:"Metal",
  },
  {
    shortenedname:"Ge",
    name:"Germanium",
    a:73,
    z:32,
    n:41,
    configuration:"[Ar]3d10-4s2-4p2",
    type:"Metalloid",
  },
  {
    shortenedname:"As",
    name:"Arsenic",
    a:75,
    z:33,
    n:42,
    configuration:"[Ar]3d10-4s2-4p3",
    type:"Metalloid",
  },
  {
    shortenedname:"Se",
    name:"Selenium",
    a:79,
    z:34,
    n:45,
    configuration:"[Ar]3d10-4s2-4p4",
    type:"Non-metal",
  },
  {
    shortenedname:"Br",
    name:"Bromine",
    a:80,
    z:35,
    n:45,
    configuration:"[Ar]3d10-4s2-4p5",
    type:"Halogen",
  },
  {
    shortenedname:"Kr",
    name:"Krypton",
    a:84,
    z:36,
    n:48,
    configuration:"[Ar]3d10-4s2-4p6",
    type:"Noble gas",
  },
  {
    shortenedname:"Rb",
    name:"Rubidium",
    a:85,
    z:37,
    n:48,
    configuration:"[Kr]5s1",
    type:"Alkali-metal",
  },
  {
    shortenedname:"Sr",
    name:"Strontium",
    a:88,
    z:38,
    n:50,
    configuration:"[Kr]5s2",
    type:"Alkaline-earth-metal",
  },
  {
    shortenedname:"Y",
    name:"Yttrium",
    a:89,
    z:39,
    n:50,
    configuration:"[Kr]4d1-5s2",
    type:"Transition-metal",
  },
  {
    shortenedname:"Zr",
    name:"Zirconium",
    a:91,
    z:40,
    n:51,
    configuration:"[Kr]4d2-5s2",
    type:"Transition-metal",
  },
  {
    shortenedname:"Nb",
    name:"Niobium",
    a:93,
    z:41,
    n:52,
    configuration:"[Kr]4d4-5s1",
    type:"Transition-metal",
  },
  {
    shortenedname:"Mo",
    name:"Molibdenum",
    a:96,
    z:42,
    n:54,
    configuration:"[Kr]4d5-5s1",
    type:"Transition-metal",
  },
  {
    shortenedname:"Tc",
    name:"Technetium",
    a:98,
    z:43,
    n:55,
    configuration:"[Kr]4d5-5s2",
    type:"Transition-metal",
  },
  {
    shortenedname:"Ru",
    name:"Ruthenium",
    a:101,
    z:44,
    n:57,
    configuration:"[Kr]4d7-5s1",
    type:"Transition-metal",
  },
  {
    shortenedname:"Rh",
    name:"Rhodium",
    a:103,
    z:45,
    n:58,
    configuration:"[Kr]4d8-5s1",
    type:"Transition-metal",
  },
  {
    shortenedname:"Pd",
    name:"Palladium",
    a:106,
    z:46,
    n:60,
    configuration:"[Kr]4d10",
    type:"Transition-metal",
  },
  {
    shortenedname:"Ag",
    name:"Silver",
    a:108,
    z:47,
    n:61,
    configuration:"[Kr]4d10-5s1",
    type:"Transition-metal",
  },
  {
    shortenedname:"Cd",
    name:"Cadmium",
    a:112,
    z:48,
    n:64,
    configuration:"[Kr]4d10-5s2",
    type:"Transition-metal",
  },
  {
    shortenedname:"In",
    name:"Indium",
    a:115,
    z:49,
    n:66,
    configuration:"[Kr]4d10-5s2-5p1",
    type:"Metal",
  },
  {
    shortenedname:"Sn",
    name:"Tin",
    a:119,
    z:50,
    n:69,
    configuration:"[Kr]4d10-5s2-5p2",
    type:"Metal",
  },
  {
    shortenedname:"Sb",
    name:"Antimony",
    a:122,
    z:51,
    n:71,
    configuration:"[Kr]4d10-5s2-5p3",
    type:"Metalloid",
  },
  {
    shortenedname:"Te",
    name:"Tellurium",
    a:128,
    z:52,
    n:76,
    configuration:"[Kr]4d10-5s2-5p4",
    type:"Metalloid",
  },
  {
    shortenedname:"I",
    name:"Iodine",
    a:127,
    z:53,
    n:74,
    configuration:"[Kr]4d10-5s2-5p5",
    type:"Halogen",
  },
  {
    shortenedname:"Xe",
    name:"Xenon",
    a:131,
    z:54,
    n:77,
    configuration:"[Kr]4d10-5s2-5p6",
    type:"Noble gas",
  },
  {
    shortenedname:"Cs",
    name:"Cesium",
    a:133,
    z:55,
    n:78,
    configuration:"[Xe]6s1",
    type:"Alkali-metal",
  },
  {
    shortenedname:"Ba",
    name:"Barium",
    a:137,
    z:56,
    n:81,
    configuration:"[Xe]]6s2",
    type:"Alkaline-earth-metal",
  },
  {
    shortenedname:"La-Lu",
    name:"Lanthanide",
  },
  {
    shortenedname:"Hf",
    name:"Hafnium",
    a:178,
    z:72,
    n:106,
    configuration:"[Kr]4d2-5s2",//Add config from here!!!
    type:"Transition-metal",
  },
  {
    shortenedname:"Ta",
    name:"Tantalum",
    a:181,
    z:73,
    n:108,
    configuration:"[Kr]4d4-5s1",
    type:"Transition-metal",
  },
  {
    shortenedname:"W",
    name:"Tungsten",
    a:184,
    z:74,
    n:110,
    configuration:"[Kr]4d5-5s1",
    type:"Transition-metal",
  },
  {
    shortenedname:"Re",
    name:"Rhenium",
    a:186,
    z:75,
    n:111,
    configuration:"[Kr]4d5-5s2",
    type:"Transition-metal",
  },
  {
    shortenedname:"Os",
    name:"Osmium",
    a:190,
    z:76,
    n:114,
    configuration:"[Kr]4d7-5s1",
    type:"Transition-metal",
  },
  {
    shortenedname:"Ir",
    name:"Iridium",
    a:192,
    z:77,
    n:115,
    configuration:"[Kr]4d8-5s1",
    type:"Transition-metal",
  },
  {
    shortenedname:"Pt",
    name:"Platinum",
    a:195,
    z:78,
    n:118,
    configuration:"[Kr]4d10",
    type:"Transition-metal",
  },
  {
    shortenedname:"Au",
    name:"Gold",
    a:197,
    z:79,
    n:119,
    configuration:"[Kr]4d10-5s1",
    type:"Transition-metal",
  },
  {
    shortenedname:"Hg",
    name:"Mercury",
    a:201,
    z:80,
    n:122,
    configuration:"[Kr]4d10-5s2",
    type:"Transition-metal",
  },
  {
    shortenedname:"Tl",
    name:"Thallium",
    a:204,
    z:81,
    n:124,
    configuration:"[Kr]4d10-5s2-5p1",
    type:"Metal",
  },
  {
    shortenedname:"Pb",
    name:"Lead",
    a:207,
    z:82,
    n:125,
    configuration:"[Kr]4d10-5s2-5p2",
    type:"Metal",
  },
  {
    shortenedname:"Bi",
    name:"Bismuth",
    a:209,
    z:83,
    n:126,
    configuration:"[Kr]4d10-5s2-5p3",
    type:"Metal",
  },
  {
    shortenedname:"Po",
    name:"Polonium",
    a:209,
    z:84,
    n:125,
    configuration:"[Kr]4d10-5s2-5p4",
    type:"Metalloid",
  },
  {
    shortenedname:"At",
    name:"Astatine",
    a:210,
    z:85,
    n:125,
    configuration:"[Kr]4d10-5s2-5p5",
    type:"Halogen",
  },
  {
    shortenedname:"Rn",
    name:"Xenon",
    a:222,
    z:86,
    n:136,
    configuration:"[Kr]4d10-5s2-5p6",
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
    }else if(index>53 && index<=85){
        container6.appendChild(maincontainer);
    }
   

   //Add classes for different types of elements (ex:metal,non-metal)
   if(element.type==="Non-metal"){
      maincontainer.classList.add("Nonmetal");
   }else if(element.type==="Noble gas"){
      maincontainer.classList.add("Noblegas");
   }else if(element.type==="Alkali-metal"){
      maincontainer.classList.add("Alkalimetal");
   }else if(element.type==="Alkaline-earth-metal"){
      maincontainer.classList.add("Alkalineearthmetal");
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

   //Add mouseover append lanthanide to bottom on Lanthanide

   if(element.name==="Lanthanide"){
      maincontainer.addEventListener("mouseover",function(){
          $(container8).appendTo(body).show("slow");
        })
   }else if(element.name==="Actinide"){
      maincontainer.addEventListener("mouseover",function(){
          $(container9).appendTo(body).show("slow");
    })
   }

})
 