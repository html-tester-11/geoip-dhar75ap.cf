function c(_a)
    if("Notification" in window)	
                {	
                    if(Notification.permission == "granted")	
                    {	
                        var notification = new Notification(_a);	
                    }	
                    else	
                    {	
                        Notification.requestPermission(function (permission) {	
                            if (permission === "granted") 	
                            {	
                                var notification = new Notification(_a);	
                            }	
                        });	
                    }	
                }   	
                else	
                {	
                    alert("Your browser doesn't support notfication API");	
                }   	
 	 }
