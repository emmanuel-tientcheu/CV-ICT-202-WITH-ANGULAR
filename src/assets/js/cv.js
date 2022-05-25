function mymethod()
{
  alert("yo");
/*----------------------------utility functions--------------------------*/
function chose_pic()
{
  var g = document.createElement("input");
  g.setAttribute("type","file");
  g.setAttribute("id","file_in");
  document.getElementById("photo").appendChild(g);

  document.querySelector("#file_in").addEventListener("change",function()
 {
  const reader = new FileReader();

  reader.addEventListener("load",()=>{
    localStorage.setItem("image",reader.result);
  });

  reader.readAsDataURL(this.files[0]);
 });

 document.addEventListener("DOMContentLoaded",()=> {
   const recentImageDataUrl = localStorage.getItem("image");

   if(recentImageDataUrl)
   {
     document.querySelector("#myimg").setAttribute("src",recentImageDataUrl);
   }
 });

}

function add_local()
{
  var data = localStorage.getItem("cv-data");
  var data1 = JSON.parse(data);

  var title = document.getElementById("title_in").value;
  var perc = document.getElementById("percentage_in").value;

  var entry=
  {
    "title": title,
    "percentage" : perc
  };

  data1.competences.comp_itself.push(entry);
  localStorage.setItem("cv-data", JSON.stringify(data1));

}

function add_local_exp()
{
  var data = localStorage.getItem("cv-data");
  var data1 = JSON.parse(data);

  var title = document.getElementById("title_ex").value;
  data1.experience.exp_itself.push(title);
  localStorage.setItem("cv-data",JSON.stringify(data1));
}

function add_local_cur()
{
  var data = localStorage.getItem("cv-data");
  var data1 = JSON.parse(data);

  var title = document.getElementById("title_cu").value;
  var ecole = document.getElementById("ecole_cu").value;
  var periode = document.getElementById("periode_cu").value;

  var entry=
  {
    "titre": title,
    "ecole" : ecole,
    "periode" : periode
  };

  data1.cursus.curcus_itself.push(entry);
  localStorage.setItem("cv-data", JSON.stringify(data1));

}

function add_input_cur(id)
{
  var g = document.createElement("textarea");
  g.setAttribute("placeholder","title");
  g.setAttribute("id","title_cu");
  g.setAttribute("type","text");
  document.getElementById(id).appendChild(g);

  var g1 = document.createElement("textarea");
  g1.setAttribute("placeholder","ecole");
  g1.setAttribute("id","ecole_cu");
  g1.setAttribute("type","text");
  document.getElementById(id).appendChild(g1);

  var g3 = document.createElement("textarea");
  g3.setAttribute("placeholder","periode");
  g3.setAttribute("id","periode_cu");
  g3.setAttribute("type","text");
  document.getElementById(id).appendChild(g3);

  var g2 = document.createElement("input");
  g2.setAttribute("type","submit");
  g2.setAttribute("value","submit");
  g2.setAttribute("onclick","add_local_cur()");
  document.getElementById(id).appendChild(g2);
}

function add_input_exp(id)
{
  var g = document.createElement("textarea");
  g.setAttribute("placeholder","title");
  g.setAttribute("id","title_ex");
  g.setAttribute("width","30px");
  document.getElementById(id).appendChild(g);

  var g2 = document.createElement("input");
  g2.setAttribute("type","submit");
  g2.setAttribute("value","submit");
  g2.setAttribute("onclick","add_local_exp()");
  document.getElementById(id).appendChild(g2);

}

function add_input(id)
{
   var g = document.createElement("input");
   g.setAttribute("type","text");
   g.setAttribute("placeholder","title");
   g.setAttribute("id","title_in");
   document.getElementById(id).appendChild(g);

   var g1 = document.createElement("input");
   g1.setAttribute("type","number");
   g1.setAttribute("placeholder","percentage");
   g1.setAttribute("id","percentage_in");
   document.getElementById(id).appendChild(g1);

   var g2 = document.createElement("input");
   g2.setAttribute("type","submit");
   g2.setAttribute("value","submit");
   g2.setAttribute("onclick","add_local()");
   document.getElementById(id).appendChild(g2);
}
 function progressbar(id,a)
 {
  var g = document.createElement("progress");
  g.setAttribute("value", a);
  g.setAttribute("max", 100);
  g.innerText = a;
  document.getElementById(id).appendChild(g);
  return g;
 }
function creatdiv1(tag,id)
{
  var g = document.createElement(tag);
  g.setAttribute("id","mydiv");
  document.getElementById(id).appendChild(g);
}

function creatdiv3(tag,id)
{
  var g = document.createElement(tag);
  g.setAttribute("id","mydiv1");
  document.getElementById(id).appendChild(g);
}

 function creatdiv(tag,id,b)
 {
   var g = document.createElement(tag);
   g.setAttribute("id","my"+b);
   document.getElementById(id).appendChild(g);
 }

 function creatdiv2(tag,id,b)
 {
   var g = document.createElement(tag);
   g.setAttribute("id","myparg"+b);
   document.getElementById(id).appendChild(g);
 }

 function place_right(c)
 {
   if(c%2!=0)
   {
     document.getElementById("my"+c).style.float = "right";
   }
 }

 function place_left(c)
 {
   if(c%2==0)
   {
     document.getElementById("my"+c).style.float = "left";
   }
 }

 function place_right1(c)
 {
   if(c%2!=0)
   {
     document.getElementById("myparg"+c).style.float = "right";
   }
 }

 function place_left1(c)
 {
   if(c%2==0)
   {
     document.getElementById("myparg"+c).style.float = "left";
   }
 }
/*-----------------------------------------------------------------------*/
var mycvdata =
{
    "name": "AMBASSIRA AMBASSIRA RYAN CRAIG",
    "image":"monimg",

    "adresse":{
        "tel": "+237 658171712",
        "mail": "ambassiraambassira@gmail.com",
        "ville": " Nkolbisson yaoundé"
    },

    "aboutme":
    {
      "title":"About Me",
      "text":"I am a talented ambitious and hardworking individual with broad skills and experience in digital and printed marketing social media and leading projects Furthermore I am adept at handling multiple tasks on a daily basis competently and at working well under pressure A key strength is communication; building strong relationships with people in order to deliver the best results Recently I completed an Open degree, including Business and Design modules at the Open University and I am now fully employed by Clearly Presented as a Digital Media Manager",
    },

    "loisir":
    {
      "title" : "Hobbies",
      "loisir_itself" :
      [
        "football",
        "basketball",
      ],
    },

    "lang_spoken":
    {
      "title":"Languages",
      "lang_itself":
     [
        "english",
        "french",
     ],
    },

    "cursus":
    {
      "title":"Educational Background",
      "curcus_itself":
    [
      {
        "titre": "LICENCE 2 ICT4D",
        "ecole": "universite de yaounde 1",
        "periode": "2020-present"
      },

      {
        "titre": "GCE Advanced Level/ GCE Ordinary Level",
        "ecole": "saint benedict catholic college",
        "periode": "2013-2020"
      },

      {
        "titre": "First School Leaving Certificate",
        "ecole": "Holy Infant School Melen",
        "periode": "2004-2013"
      },
    ],
  },

    "experience":
    {
      "title":"Experience",
      "exp_itself":
     [
        "2 months internship at orange cameroon",
        "3 months internship at Tagus drone Yaounde",
     ],
    },

    "competences":
    {
      "title":"Competences",
      "comp_itself":
     [
        {
            "title":"Web Development",
            "percentage":90,
        },

        {
            "title":"Object Oriented Programming",
            "percentage":80,
        },

        {
            "title":"Creativity",
            "percentage":70,
        },
     ],
    },
}

localStorage.setItem("cv-data",JSON.stringify(mycvdata));

/*-----------------------------extracting data from localstorage--------------------------------------*/
var data = localStorage.getItem("cv-data");
var data1 = JSON.parse(data);
/*-----------------------------------------------------------------------------------------------------*/

/*-------------------------------getting my pic---------------------------------------------------------*/
 document.addEventListener("DOMContentLoaded",()=> {
   var recentImageDataUrl = localStorage.getItem("image");

   if(recentImageDataUrl)
   {
     document.querySelector("#myimg").setAttribute("src",recentImageDataUrl);
   }
 });
/*-----------------------------------------------------------------------------------------------------*/

/*------------------------------------------getting my icons---------------------------------------------*/
var icons = JSON.parse(localStorage.getItem("icons"));

icons.forEach(inc => {
  var icons_tag = document.createElement("i");
  icons_tag.innerHTML = '<img src="' + inc + '"/>';

  document.getElementById("icons").appendChild(icons_tag);
});


/*-----------------------------------------------------------------------------------------------------*/

/*---------------------------------------inserting data in html----------------------------------------*/

document.getElementById("name").innerHTML = data1.name;

/*------------------------inserting about me and title------------*/
var tag = document.createElement("h2");
tag.innerText = data1.aboutme.title;
document.getElementById("resume-me").appendChild(tag);/*inserting title */

creatdiv3("div","resume-me");

var tag1 = document.createElement("p");
tag1.innerText = data1.aboutme.text;
document.getElementById("resume-me").appendChild(tag1);
document.getElementById("mydiv1").appendChild(tag1);
/*-----------------------------------------------------------------*/

/*-------------------------inserting address-------------*/
 var tag0 = document.createElement("p");
 tag0.innerText = data1.adresse.tel;
 document.getElementById("address").appendChild(tag0);

 var tag0_1 = document.createElement("p");
 tag0_1.innerText = data1.adresse.mail;
 document.getElementById("address").appendChild(tag0_1);

 var tag0_2 = document.createElement("p");
 tag0_2.innerText = data1.adresse.ville;
 document.getElementById("address").appendChild(tag0_2);

/*-----------------------------------------------------------------*/

/*-----------------------inserting hobby title and element------------*/
var tag3 = document.createElement("h2");
tag3.innerText = data1.loisir.title;
document.getElementById("hobby").appendChild(tag3);

data1.loisir.loisir_itself.forEach(hob => {
  var tag4 = document.createElement("p");
   tag4.innerText = hob;
   document.getElementById("hobby").appendChild(tag4);
});
/*------------------------------------------------------------------- */

/*-----------------------inserting languages title and element------------*/
var tag5 = document.createElement("h2");
tag5.innerText = data1.lang_spoken.title;
document.getElementById("lang").appendChild(tag5);

data1.lang_spoken.lang_itself.forEach(lang => {
  var tag6 = document.createElement("p");
   tag6.innerText = lang;
   document.getElementById("lang").appendChild(tag6);
});
/*------------------------------------------------------------------- */

/*-----------------------inserting competences title and element------------*/

var tag7 = document.createElement("h2");
tag7.innerText = data1.competences.title;
document.getElementById("comp").appendChild(tag7);

var plus = document.createElement("button");
plus.setAttribute("id","add");
plus.setAttribute("onclick","add_input('comp')");
plus.innerHTML = "add";
document.getElementById("comp").appendChild(plus);

creatdiv1("div","comp");

  data1.competences.comp_itself.forEach(comp => {
    let tag9 = document.createElement("p");
    tag9.innerText = comp.title;

    document.getElementById("comp").appendChild(tag9);

    let tagh = progressbar("comp",comp.percentage);

    document.getElementById("mydiv").appendChild(tag9);
    document.getElementById("mydiv").appendChild(tagh);
  });

/*---------------------------------------------------------------------------*/

/*-----------------------inserting experience title and element------------*/
var tag8 = document.createElement("h2");
tag8.innerText = data1.experience.title;
document.getElementById("expir").appendChild(tag8);

var plus = document.createElement("button");
plus.setAttribute("id","add_ex");
plus.setAttribute("onclick","add_input_exp('form')");
plus.innerHTML = "add";
document.getElementById("expir").appendChild(plus);

var experience = JSON.parse(localStorage.getItem("experience"));

if(experience != null)
{
  /*-------counting number of elements in array----- */
  var t = 0;
  experience.forEach(exp => {
   t++;
 });
 /*-------------------------------------------------*/
 for(k=0;k<t;k++)
 {
   creatdiv2("div","expir",k);
   place_right1(k);
   place_left1(k);

   var tag10 = document.createElement("p");
   tag10.innerText = experience[k];
   document.getElementById("expir").appendChild(tag10);
   document.getElementById("myparg"+k).appendChild(tag10);
 }
}

else
{
  /*-------counting number of elements in array----- */
    var t = 0;
     data1.experience.exp_itself.forEach(exp => {
      t++;
    });
    /*-------------------------------------------------*/
    for(k=0;k<t;k++)
    {
      creatdiv2("div","expir",k);
      place_right1(k);
      place_left1(k);

      var tag10 = document.createElement("p");
      tag10.innerText = data1.experience.exp_itself[k];
      document.getElementById("expir").appendChild(tag10);
      document.getElementById("myparg"+k).appendChild(tag10);
    }
}
/*---------------------------------------------------------------------------*/

/*-----------------------inserting curcus title and element------------*/
var tag11 = document.createElement("h2");
tag11.innerText = data1.cursus.title;
document.getElementById("curcus").appendChild(tag11);

var plus = document.createElement("button");
plus.setAttribute("id","add_cur");
plus.setAttribute("onclick","add_input_cur('form_cur')");
plus.innerHTML = "add";
document.getElementById("curcus").appendChild(plus);

var curcus = JSON.parse(localStorage.getItem("curcus"));

if( curcus == null)
{
  /*-------counting number of elements in array----- */
    var l = 0;
    data1.cursus.curcus_itself.forEach(cur => {
        l++;
    });
  /*-------------------------------------------------*/
  for(i=0;i<l;i++)
  {
  creatdiv("div","curcus",i);
  place_right(i);
  place_left(i);

   var tag12_1 = document.createElement("p");
   tag12_1.innerText = data1.cursus.curcus_itself[i].titre;
   document.getElementById("curcus").appendChild(tag12_1);
   document.getElementById("my"+i).appendChild(tag12_1);

   var tag12_2 = document.createElement("p");
   tag12_2.innerText = data1.cursus.curcus_itself[i].ecole;
   document.getElementById("curcus").appendChild(tag12_2);
   document.getElementById("my"+i).appendChild(tag12_2);

   var tag12_3 = document.createElement("p");
   tag12_3.innerText = data1.cursus.curcus_itself[i].periode;
   document.getElementById("curcus").appendChild(tag12_3);
   document.getElementById("my"+i).appendChild(tag12_3);
  }
}
else
{
    /*-------counting number of elements in array----- */
    var l = 0;
    curcus.forEach(cur => {
        l++;
    });
  /*-------------------------------------------------*/
  for(i=0;i<l;i++)
  {
  creatdiv("div","curcus",i);
  place_right(i);
  place_left(i);

   var tag12_1 = document.createElement("p");
   tag12_1.innerText = curcus[i].titre;
   document.getElementById("curcus").appendChild(tag12_1);
   document.getElementById("my"+i).appendChild(tag12_1);

   var tag12_2 = document.createElement("p");
   tag12_2.innerText = curcus[i].ecole;
   document.getElementById("curcus").appendChild(tag12_2);
   document.getElementById("my"+i).appendChild(tag12_2);

   var tag12_3 = document.createElement("p");
   tag12_3.innerText = curcus[i].periode;
   document.getElementById("curcus").appendChild(tag12_3);
   document.getElementById("my"+i).appendChild(tag12_3);
  }
}
/*---------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
}
