
/* IndholdsvisningFormål: Skjul sektioner med JavaScript, således at formen er anvendelig uden brug af JavaScript.*/
document.getElementById("startknap").classList.remove("hidden");
document.getElementById("section2").classList.add("hidden");
document.getElementById("section3").classList.add("hidden");
document.getElementById("section4").classList.add("hidden");
document.getElementById("section5").classList.add("hidden");
document.getElementById("section6").classList.add("hidden");
document.getElementById("section7").classList.add("hidden");

/*Denne kode lader brugeren at bevæge sig mellem beregneres trin vedd at klippe på "fortsæt"/"tilbage" knapper og/eller breadcrumbs*/
function showHideSection(sectionToBeShown){
		var ids = ["startknap", "section2", "section3", "section4", "section5", "section6", "section7"]

		for(i = 0; i < ids.length; i++){
			if(sectionToBeShown == ids[i]){
				document.getElementById(ids[i]).classList.remove("hidden");
			}
			else {
				document.getElementById(ids[i]).classList.add("hidden");
			}
		}
	}

	var demonstrationsknap = document.getElementById("startknap");
	demonstrationsknap.onclick = function(){
		breadcrump.classList.remove("hidden");
		showHideSection('section2');
	}

	document.getElementById("breadcrump1").classList.add ("breadcrumbs_link_active");
	document.getElementById("breadcrump2").classList.remove("breadcrumbs_link_active");
	document.getElementById("breadcrump3").classList.remove ("breadcrumbs_link_active");
	document.getElementById("breadcrump4").classList.remove ("breadcrumbs_link_active");
	document.getElementById("breadcrump5").classList.remove("breadcrumbs_link_active");

	function showHideActiveBreadcrumLink(activebreadcrumplinkToBeShown){
		var ids = ["breadcrump1", "breadcrump2", "breadcrump3", "breadcrump4", "breadcrump5"]

		for(i = 0; i < ids.length; i++){
			if(activebreadcrumplinkToBeShown == ids[i]){
				document.getElementById(ids[i]).classList.remove("breadcrumbs_link_active");
			}
			else {
				document.getElementById(ids[i]).classList.add("breadcrumbs_link_active");
			}
		}
	}
