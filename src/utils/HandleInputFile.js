import * as parser from "papaparse";

export const HandleInputFile = async (file) => {

    var fileData = {}; //holds the file data
    const ConvertCsvToJson = (file) => {
        return new Promise((resolve, reject) => {
            parser.parse(file, {
                header: true,
                complete: (results) => {
                    resolve(results);
                },
                error: (error) => {
                    reject(error);
                },
            });
        });
    };

    await ConvertCsvToJson(file)
        .then((data) => {
            // arranging the data into required format
            fileData = {
                properties: file,
                data: data,
            };
            console.log(fileData);
        })
        .catch((error) => {
            console.log(error);
        });
    return fileData;
};

/** 
 * Following is the response or the resultant object from the above function

fileData = {
    properties: {
        lastModified: 1620000000000,
        lastModifiedDate: "Wed May 12 2021 00:00:00 GMT+0530 (India Standard Time)",
        name: "File name as a string",
        path: "C:\Users\username\Downloads\file.csv",
        size: 1234,
        type: "text/csv",
        webkitRelativePath: "",
    },
    data: {
        data: [
            0:{
                ModuleName: 'ROW WISE VALUES', 
                TestName: 'ROW WISE VALUES',
                FileType: 'ROW WISE VALUES',
                Diff: 'ROW WISE VALUES',
                Status: 'ROW WISE VALUES',
                TestName : "ROW WISE VALUES",
                baseline_psfaults : "ROW WISE VALUES",
                out_psfaults: "ROW WISE VALUES"
          }, 
          1:{..., next row as another object}
        ],
        errors: [
            0: {type: 'FieldMismatch', code: 'TooFewFields', message: 'Too few fields: expected 9 fields but parsed 1', row: 216}
        ],
        meta: {
            delimiter: ",",
            linebreak: "\r
            truncated: false,
            cursor: 1234
            aborted: false,
            fields:[ 
                "ModuleName", "TestName", "FileType", "Diff", "Status", "TestName", "baseline_psfaults", "out_psfaults"
            ],
        }
    },
}
*/


/*
        The following was the earlier approach for getting csv data from file, and seperating the headers, line breaks,
        but later found a npm package called papaparse which does the same thing in a much simpler way.
        https://www.npmjs.com/package/papaparse

    function csvJSON(csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");
    for(var i=1;i<lines.length;i++){
      var obj = {};
      var currentline=lines[i].split(",");
      for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    return JSON.stringify(result); //JSON
  }

*/
