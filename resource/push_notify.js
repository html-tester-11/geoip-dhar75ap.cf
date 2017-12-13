
            function trigger_notification()
            {
                //check if browser supports notification API
                if("Notification" in window)
                {
                    if(Notification.permission == "granted")
                    {
                        var notification = new Notification("Notification Title", {"body":"Message Body", "icon":"1.jpg"});
                    }
                    else
                    {
                        Notification.requestPermission(function (permission) {
                            if (permission === "granted") 
                            {
                                var notification = new Notification("Notification Title", {"body":"Message Body", "icon":"1.jpg"});
                            }
                        });
                    }
                }   
                else
                {
                    alert("Your browser doesn't support notfication API");
                }       
            }

