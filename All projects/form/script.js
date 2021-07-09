
                    function formsubmit(event){
                        event.preventDefault();

                        var first_name = document.forms['myForm']['Firstname'].value;
                        var second_name = document.forms['myForm']['Secondname'].value;
                        var profession_select = document.forms['myForm']['Prof'].value;
                        var about_select = document.forms['myForm']['About'].value;
                        
                        
                        
                        var nameObject = document.getElementById('Name');
                        var Profession = document.getElementById('Profession');
                        var about = document.getElementById('About');
                        
                        
                        
                        
                        nameObject.innerHTML = "Name: " + first_name + " " +  second_name ;
                        Profession.innerHTML = "Profession: " + profession_select ;
                        about.innerHTML = "About: " + about_select;
                        first_name.innerhtml="";
                        second_name.innerhtml="";
                        profession_select.innerhtml="";
                        about_select.innerhtml="";
                        

                    


                    }

                    function checkbox(event) {
                        event.preventDefault();
                        var male_select  = document.getElementById('Male');
                        var female_select = document.getElementById('Female');

                        if (male_select.checked == true && female_select.checked == true){
                            return document.getElementById('Gender').innerHTML = "Gender: Select Only one "  ;
                        }
                        else if (male_select.checked == true) {
                            var m = male_select.value;
                            return document.getElementById('Gender').innerHTML = "Gender: " + m ;
                        }
                        else if (female_select.checked == true) {
                            var f = female_select.value;
                            return document.getElementById('Gender').innerHTML = "Gender: " + f ;
                        }
                        else {
                            return document.getElementById('Gender').innerHTML = "Gender: Select one "  ;
                        }
                        
                    }

                   
