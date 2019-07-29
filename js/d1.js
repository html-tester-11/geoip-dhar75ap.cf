function GenerateTable() 
        {
           var _a=0;
            var __data= new Array();
         //  _train.push(["serial","halt", "day", "fullname" ,"route" ,"lng","distance","scharr","lat","code","no","schdep","state"]);
          __data.push(["status","downloaded_bytes", "_percent_str", "_speed_str" ,"elapsed" ,"total_bytes","tmpfilename","speed","_total_bytes_str","filename","eta","_eta_str"]);
  
            var _arr=[];
           
             _arr.push(_data.status);
             _arr.push(_data.downloaded_bytes);
             _arr.push(_data._percent_str);
             _arr.push(_data._speed_str);
              // _arr.push(_data[_a].lng);
  _arr.push(_data.elapsed);
  _arr.push(_data.total_bytes);
 // _arr.push(_data[_a].lat);
  _arr.push("<marquee>"+_data.tmpfilename+"</marquee");
  _arr.push(_data.speed);
  _arr.push(_data._total_bytes_str);
  _arr.push("<marquee>"+_data.filename+"</marquee>");
   _arr.push(_data.eta);
    _arr.push(_data._eta_str);

            
             
           
            __data.push(_arr);


            

        
    document.write("<table> <th> File Status</th> </table");

            //Create a HTML Table element.
            var table = document.createElement("TABLE");
            table.border = "1";

            //Get the count of columns.
            var columnCount =__data[0].length;

            //Add the header row.
            var row = table.insertRow(-1);
            for (var i = 0; i < columnCount; i++) {
                var headerCell = document.createElement("TH");
                headerCell.innerHTML =__data[0][i];
                row.appendChild(headerCell);
            }

            //Add the data rows.
            for (var i = 1; i <__data.length; i++) {
                row = table.insertRow(-1);
                for (var j = 0; j < columnCount; j++) {
                    var cell = row.insertCell(-1);
                    cell.innerHTML =__data[i][j];
                }
            }

            var dvTable = document.getElementById("dvTable");
            dvTable.innerHTML = "";
            dvTable.appendChild(table);
        }
