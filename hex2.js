
function matrixObjectInit(row, col) {
    var mat = new Object();
    mat.row = row;
    mat.col = col;
    mat.data = new Array(mat.row);

    for (var i = 0; i < mat.row; i++) {
        mat.data[i] = new Array(mat.col);
        for (var j = 0; j < mat.col; j++) {
            mat.data[i][j] = "n";
        }
    }
    
    mat.updateById = function(id, abbr) {
        var ids = id.split("_");
        var i = parseInt(ids[1])-1;
        var j = parseInt(ids[2])-1;
        var content = $("#"+id).attr("abbr");
        this.update(i,j,abbr);
    }
    
    mat.update = function (i, j, content) {
        var r = i + Math.floor((j+1)/2);
        var c = j;
        //alert(this.data);
        this.data[r][c] = content;
    }
    
    mat.exportData = function () {
        result = "battle_matrix2 =\n{\n{\n";
        for (var i = 0; i < this.row; i++) {
            var line = "{ ";
            for (var j = 0; j < this.col; j++) {
                var single = "\"" + this.data[i][j] + "\",";
                line += single;
            }
            line += " },\n";
            result += line;
        }
        return result+"},\n}";
    }
    
    mat.exportDataJson = function () {}
    
    return mat;
}


// onclick

function OnClickHex() {
    var abbr = $(".cell_selected").attr("abbr");
    var id = $(this).attr("id");
    
    mat.updateById(id, abbr);
    cellfunc[abbr](id, abbr);
}

function restoreCellColor() {
    $(".hex").children(".middle").css({
        "background-color": "#AAAAAA",
    });
    $("#"+id).children(".left").css({
        "background-color": "#AAAAAA",
    });
    $("#"+id).children(".right").css({
        "background-color": "#AAAAAA",
    });
}


function changeCellColor(id, color) {
    $("#"+id).children(".middle").css({
        "background-color": color,
    });
    $("#"+id).children(".left").css({
        "border-right-color": color,
    });
    $("#"+id).children(".right").css({
        "border-left-color": color,
    });
}

cellfunc = {};

cellfunc["fn"] = function (id, abbr) {

    $("#"+id).attr("abbr", abbr);
    changeCellColor(id, cellColor[abbr]);

}

cellfunc["wn"] = function (id, abbr) {

    $("#"+id).attr("abbr", abbr);
    changeCellColor(id, cellColor[abbr]);

}


function OnClickPicker() {
    var abbr = $(this).attr("abbr");
    $(".cell_selected").attr("abbr", abbr);
    // $(".picker.cell").css({
        // "border": "5px solid transparent",
    // });
    // $(this).css({
        // "border": "5px solid black",
    // });
    
}

pickerfunc = function (abbr) {
    $(".cell_selected").attr("abbr", abbr);

}


function exportMatrix() {
    //$(".hex").each(exportEach)
    $(".matrixtext").val(mat.exportData());
}

function exportEach() {
    var id = $(this).attr("id");
    mat.updateById(id);
}

cellColor = {
    "fn":"#FF1111",
    "wn":"#1111FF",
}

var mat = matrixObjectInit(4,4); // different from i, j
$(".hex").click(OnClickHex);
$(".cell").click(OnClickPicker);


//循环所有元素
//col = col; row = row + col/2