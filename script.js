let tab = function () {
    let tabTower = document.querySelectorAll(".tab__tower"),
    tabImage = document.querySelectorAll(".tab__image"),
    tabName;
    tabTower.forEach(element => {
        element.addEventListener("click", selectTabTower)
    });
    function selectTabTower() {
        tabTower.forEach(element => {
            element.classList.remove('is-active');
        });
        this.classList.add("is-active");
        tabName = this.getAttribute("data-tab-name")
        selectTabImage(tabName);
    }
    function selectTabImage (tabName) {
        tabImage.forEach(element => {
            element.classList.contains(tabName)? element.classList.add("is-active"): 
            element.classList.remove("is-active");

        })
    }
};
tab();