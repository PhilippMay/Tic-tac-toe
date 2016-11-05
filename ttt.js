var app = angular.module("ttt", ['ngMaterial']);

app.controller("tttCtrl", function ($scope, $mdDialog, $timeout) {

    var x;
    var o;

    /******************GAME START*****************/

    $scope.start = function (opt) {
            $mdDialog.hide();

            $("md-backdrop").remove();
            if (opt == 1) {
                x = "O";
                o = "X";
                $scope.gameField = {};
                $scope.gameField.cell5 = x;
            } else if (opt == 2) {
                x = "X";
                o = "O";
                $scope.gameField = {};
            }

        }
        // $scope.start();
        /************Dialog*************/

    $scope.startDialog = function () {
        $mdDialog.show({
            contentElement: '#startDialog',
            parent: angular.element(document.body)
        });
    };

    $scope.startDialog();


    $scope.winDialog = function (val) {
        $mdDialog.show({
            contentElement: '#winDialog',
            parent: angular.element(document.body)
        });
        if (val == x) {
            $scope.winner = "Computer win. Try again?";

        } else if (val == 11) {
            $scope.winner = "Seems like a draw!";
        } else {
            $scope.winner = "Congratulations! You win.";
        }

    };
    $scope.resetGame = function () {
        $mdDialog.hide();
        $scope.startDialog();
    }

    /********Check if win*********/

    var checkWin = function (val) {
        var arr = Object.keys($scope.gameField);
        if ($scope.gameField.cell1 == val && $scope.gameField.cell2 == val && $scope.gameField.cell3 == val) {
            $scope.winDialog(val);
        } else if ($scope.gameField.cell4 == val && $scope.gameField.cell5 == val && $scope.gameField.cell6 == val) {
            $scope.winDialog(val);
        } else if ($scope.gameField.cell7 == val && $scope.gameField.cell8 == val && $scope.gameField.cell9 == val) {
            $scope.winDialog(val);
        } else if ($scope.gameField.cell1 == val && $scope.gameField.cell4 == val && $scope.gameField.cell7 == val) {
            $scope.winDialog(val);
        } else if ($scope.gameField.cell2 == val && $scope.gameField.cell5 == val && $scope.gameField.cell8 == val) {
            $scope.winDialog(val);
        } else if ($scope.gameField.cell3 == val && $scope.gameField.cell6 == val && $scope.gameField.cell9 == val) {
            $scope.winDialog(val);
        } else if ($scope.gameField.cell1 == val && $scope.gameField.cell5 == val && $scope.gameField.cell9 == val) {
            $scope.winDialog(val);
        } else if ($scope.gameField.cell3 == val && $scope.gameField.cell5 == val && $scope.gameField.cell7 == val) {
            $scope.winDialog(val);
        } else if (arr.length >= 9) {

            $scope.winDialog(11);
        } else {
            return false;

        }
    };

    /***********COMPUTER STEP**************/

    var compGo = function () {
        //find latest user step
        var arr = Object.keys($scope.gameField);
        console.log("arr: " + arr.length);
        var latestStep = arr[(arr.length - 1)];
        console.log("Latest step: " + latestStep);
        //computer step
        if (latestStep == "cell1") {
            if ($scope.gameField.cell5 == undefined) {
                $scope.gameField.cell5 = x;
            } else if ($scope.gameField.cell2 == undefined) {
                $scope.gameField.cell2 = x;
            } else if ($scope.gameField.cell4 == undefined) {
                $scope.gameField.cell4 = x;
            } else if ($scope.gameField.cell6 == undefined) {
                $scope.gameField.cell6 = x;
            } else if ($scope.gameField.cell8 == undefined) {
                $scope.gameField.cell8 = x;
            } else if ($scope.gameField.cell1 == undefined) {
                $scope.gameField.cell1 = x;
            } else if ($scope.gameField.cell3 == undefined) {
                $scope.gameField.cell3 = x;
            }

        } else if (latestStep == "cell2") {
            if ($scope.gameField.cell5 == undefined) {
                $scope.gameField.cell5 = x;
            } else if ($scope.gameField.cell1 == undefined) {
                $scope.gameField.cell1 = x;
            } else if ($scope.gameField.cell3 == undefined) {
                $scope.gameField.cell3 = x;
            } else if ($scope.gameField.cell6 == undefined) {
                $scope.gameField.cell6 = x;
            } else if ($scope.gameField.cell8 == undefined) {
                $scope.gameField.cell8 = x;
            } else if ($scope.gameField.cell2 == undefined) {
                $scope.gameField.cell2 = x;
            } else if ($scope.gameField.cell4 == undefined) {
                $scope.gameField.cell4 = x;
            }

        } else if (latestStep == "cell3") {
            if ($scope.gameField.cell5 == undefined) {
                $scope.gameField.cell5 = x;
            } else if ($scope.gameField.cell2 == undefined) {
                $scope.gameField.cell2 = x;
            } else if ($scope.gameField.cell6 == undefined) {
                $scope.gameField.cell6 = x;
            } else if ($scope.gameField.cell4 == undefined) {
                $scope.gameField.cell4 = x;
            } else if ($scope.gameField.cell8 == undefined) {
                $scope.gameField.cell8 = x;
            } else if ($scope.gameField.cell7 == undefined) {
                $scope.gameField.cell7 = x;
            } else if ($scope.gameField.cell9 == undefined) {
                $scope.gameField.cell9 = x;
            }

        } else if (latestStep == "cell4") {
            if ($scope.gameField.cell5 == undefined) {
                $scope.gameField.cell5 = x;
            } else if ($scope.gameField.cell1 == undefined) {
                $scope.gameField.cell1 = x;
            } else if ($scope.gameField.cell7 == undefined) {
                $scope.gameField.cell7 = x;
            } else if ($scope.gameField.cell6 == undefined) {
                $scope.gameField.cell6 = x;
            } else if ($scope.gameField.cell8 == undefined) {
                $scope.gameField.cell8 = x;
            }


        } else if (latestStep == "cell5") {
            if ($scope.gameField.cell1 == undefined) {
                $scope.gameField.cell1 = x;
            } else if ($scope.gameField.cell7 == undefined) {
                $scope.gameField.cell7 = x;
            } else if ($scope.gameField.cell2 == undefined) {
                $scope.gameField.cell2 = x;
            } else if ($scope.gameField.cell9 == undefined) {
                $scope.gameField.cell9 = x;
            } else if ($scope.gameField.cell6 == undefined) {
                $scope.gameField.cell6 = x;
            } else if ($scope.gameField.cell3 == undefined) {
                $scope.gameField.cell3 = x;
            } else if ($scope.gameField.cell4 == undefined) {
                $scope.gameField.cell4 = x;
            } else if ($scope.gameField.cell8 == undefined) {
                $scope.gameField.cell8 = x;
            }
        } else if (latestStep == "cell6") {
            if ($scope.gameField.cell5 == undefined) {
                $scope.gameField.cell5 = x;
            } else if ($scope.gameField.cell9 == undefined) {
                $scope.gameField.cell9 = x;
            } else if ($scope.gameField.cell3 == undefined) {
                $scope.gameField.cell3 = x;
            } else if ($scope.gameField.cell6 == undefined) {
                $scope.gameField.cell6 = x;
            } else if ($scope.gameField.cell8 == undefined) {
                $scope.gameField.cell8 = x;
            } else if ($scope.gameField.cell2 == undefined) {
                $scope.gameField.cell2 = x;
            } else if ($scope.gameField.cell4 == undefined) {
                $scope.gameField.cell4 = x;
            }
        } else if (latestStep == "cell7") {
            if ($scope.gameField.cell5 == undefined) {
                $scope.gameField.cell5 = x;
            } else if ($scope.gameField.cell4 == undefined) {
                $scope.gameField.cell4 = x;
            } else if ($scope.gameField.cell8 == undefined) {
                $scope.gameField.cell8 = x;
            } else if ($scope.gameField.cell7 == undefined) {
                $scope.gameField.cell7 = x;
            } else if ($scope.gameField.cell9 == undefined) {
                $scope.gameField.cell9 = x;
            } else if ($scope.gameField.cell6 == undefined) {
                $scope.gameField.cell6 = x;
            } else if ($scope.gameField.cell1 == undefined) {
                $scope.gameField.cell1 = x;
            } else if ($scope.gameField.cell3 == undefined) {
                $scope.gameField.cell3 = x;
            }
        } else if (latestStep == "cell8") {
            if ($scope.gameField.cell5 == undefined) {
                $scope.gameField.cell5 = x;
            } else if ($scope.gameField.cell7 == undefined) {
                $scope.gameField.cell7 = x;
            } else if ($scope.gameField.cell9 == undefined) {
                $scope.gameField.cell9 = x;
            } else if ($scope.gameField.cell6 == undefined) {
                $scope.gameField.cell6 = x;
            } else if ($scope.gameField.cell8 == undefined) {
                $scope.gameField.cell8 = x;
            } else if ($scope.gameField.cell2 == undefined) {
                $scope.gameField.cell2 = x;
            } else if ($scope.gameField.cell4 == undefined) {
                $scope.gameField.cell4 = x;
            } else if ($scope.gameField.cell1 == undefined) {
                $scope.gameField.cell1 = x;
            } else if ($scope.gameField.cell3 == undefined) {
                $scope.gameField.cell3 = x;
            }
        } else if (latestStep == "cell9") {
            if ($scope.gameField.cell5 == undefined) {
                $scope.gameField.cell5 = x;
            } else if ($scope.gameField.cell6 == undefined) {
                $scope.gameField.cell6 = x;
            } else if ($scope.gameField.cell8 == undefined) {
                $scope.gameField.cell8 = x;
            } else if ($scope.gameField.cell2 == undefined) {
                $scope.gameField.cell2 = x;
            } else if ($scope.gameField.cell4 == undefined) {
                $scope.gameField.cell4 = x;
            } else if ($scope.gameField.cell1 == undefined) {
                $scope.gameField.cell1 = x;
            } else if ($scope.gameField.cell3 == undefined) {
                $scope.gameField.cell3 = x;
            }
        }
        checkWin(x);


    };

    /**************USER STEP*****************/
    $scope.userGo = function (cell) {
        if ($scope.gameField[cell] == undefined) {
            $scope.gameField[cell] = o;
            if (checkWin(o) === false) {
                compGo();
            } else {
                checkWin(o);
            }

        }
    }
});