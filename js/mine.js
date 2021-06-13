const siteName = document.getElementById('nameInp'),

      siteUrl = document.getElementById('urlInp'),

      submitBtn = document.getElementById('submitBtm'),

      urlList = document.getElementById('list');

if(localStorage.getItem('websitesCollection') == null) {

    var webSites = [];

} else {

    var webSites = JSON.parse(localStorage.getItem('websitesCollection'));

    displaySites();

}


siteName.addEventListener('blur', function () {
      
    'use strict';
      
    if(this.value == "" || this.value == null) {

        this.setAttribute('style', 'box-shadow: 0 0 15px #B30055;border: 2px solid #B30055');

        this.nextElementSibling.innerText = 'Please Enter Site Name !!';

        this.nextElementSibling.style.display = 'block';

        submitBtn.setAttribute('disabled','');

    } else {

        this.setAttribute('style', 'box-shadow: 0 0 5px #00B3FF;border: 1px solid #00B3FF');

        this.nextElementSibling.style.display = 'none';

        submitBtn.removeAttribute('disabled');

    }

});

siteName.addEventListener('focus', function () {

    'use strict';

    this.setAttribute('style', 'box-shadow: 0 0 15px #00B3FF;outline: none;')

});

siteUrl.addEventListener('focus', function () {

    'use strict';

    this.setAttribute('style', 'box-shadow: 0 0 15px #00B3FF;outline: none;')

});


siteUrl.addEventListener('blur', function () {
      
    'use strict';
      
    if(this.value == "" || this.value == null) {

        this.setAttribute('style', 'box-shadow: 0 0 15px #B30055;border: 2px solid #B30055');

        this.nextElementSibling.innerText = 'Please Enter Site URL !!';

        this.nextElementSibling.style.display = 'block';

        submitBtn.setAttribute('disabled','');

    } else {

        this.setAttribute('style', 'box-shadow: 0 0 5px #00B3FF;border: 1px solid #00B3FF');

        this.nextElementSibling.style.display = 'none';

        submitBtn.removeAttribute('disabled');

    }

});

submitBtn.addEventListener('click', function () {

    'use strict';

    if(siteName.value == "" || siteUrl.value == "") {

        alert("Please Compler All Information !!");

    } else {

        addsite();

        displaySites();

    }

});

function addsite() {

    'use strict';

    var site = {

        sName: siteName.value,

        sUrl: siteUrl.value,

    };

    webSites.push(site);

    var newjson = JSON.stringify(webSites);

    siteName.value = "";

    siteUrl.value = "";

    localStorage.setItem('websitesCollection', newjson);

    displaySites();

}

function displaySites() {

    'use strict';
    
    var strContent = "",

        sitesNum = webSites.length;

    for(let i = 0; i < sitesNum; i++) {

        strContent += ` <div class="item my-3 p-3">
        <div class="item-name">
            <h3>${webSites[i].sName}</h3>
        </div>
        <div class="btn-collection">
            <a class="btn" target="_blank" href="${webSites[i].sUrl}">Vist</a>
            <button class="btn mx-4 dellet">Delet</button>
        </div>
        </div>`;

    }

    urlList.innerHTML = strContent;

    var delBtn = document.querySelectorAll('.dellet');

    if(delSite.length > 0) {
        
        for(let i = 0;i < delBtn.length; i++) {
    
            delBtn[i].addEventListener('click', function() {
                    
                'use strict';

                var siteName = this.parentNode.parentNode.childNodes[1].childNodes[1].innerText;

                // delSite(this.previousSibling.previousSibling.lastChild.href);

                delSite(siteName);

            });
        }
    }
}

function delSite(name) {

    'use strict';

    for(let i = 0; i < webSites.length; i++) {

        if (webSites[i].sName == name) {

            webSites.splice(i,1);

            var jsonStr = JSON.stringify(webSites);

            localStorage.setItem('websitesCollection', jsonStr);
        }
    }

    displaySites();
}