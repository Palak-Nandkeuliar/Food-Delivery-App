onEvent("start", "click", function() {
  setScreen("screen2");
});
onEvent("login", "click", function() {
  setScreen("screen3");
});
onEvent("account", "click", function( ) {
  setScreen("screen4");
});
onEvent("next", "click", function( ) {
  setScreen("screen6");
});
onEvent("create", "click", function( ) {
  createRecord("Login", {Username:(getText("user1")), Password:(getText("pass2"))}, function(record) {
    if (getText("user1")) {
      if (getNumber("pass2")) {
        setScreen("screen5");
      } else {
        setText("status", "please enter username or password.");
        setTimeout(function() {
          setText("status", "");
        }, 5000);
      }
    } else {
      setText("status", "please enter username or password.");
      setTimeout(function() {
        setText("status", "");
      }, 5000);
    }
  });
});
onEvent("Login1", "click", function( ) {
  readRecords("Login", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (getText("user") == (records[i]).Username) {
        if (getText("pass") == (records[i]).Password) {
          setScreen("screen5");
          if (getText("user") == "") {
            if (getText("pass") == "") {
              setScreen("screen3");
            } else {
              setText("status", "please enter username or password.");
              setTimeout(function() {
                setText("status", "");
              }, 5000);
            }
          } else {
            setText("status", "please enter username or password.");
            setTimeout(function() {
              setText("status", "");
            }, 5000);
          }
        } else {
          setText("status", "incorrect username or password.");
          setTimeout(function() {
            setText("status", "");
          }, 5000);
        }
      } else {
        setText("status", "incorrect username or password.");
        setTimeout(function() {
          setText("status", "");
        }, 5000);
      }
    }
  });
});
onEvent("back", "click", function( ) {
  setScreen("screen6");
});
onEvent("veg", "click", function( ) {
  setScreen("screen7");
});
onEvent("non-veg", "click", function( ) {
  setScreen("screen24");
});
onEvent("vegan", "click", function( ) {
  setScreen("screen42");
});
onEvent("back1", "click", function( ) {
  setScreen("screen5");
});
onEvent("back9", "click", function( ) {
  setScreen("screen6");
});
onEvent("next1", "click", function( ) {
  setScreen("screen8");
});
onEvent("c1", "click", function( ) {
  setScreen("screen9");
});
onEvent("c2", "click", function( ) {
  setScreen("screen10");
});
onEvent("c3", "click", function( ) {
  setScreen("screen15");
});
onEvent("c4", "click", function( ) {
  setScreen("screen12");
});
onEvent("c5", "click", function( ) {
  setScreen("screen11");
});
onEvent("c6", "click", function( ) {
  setScreen("screen13");
});
onEvent("c7", "click", function( ) {
  setScreen("screen14");
});
onEvent("c33", "click", function( ) {
  setScreen("screen16");
});
onEvent("c34", "click", function( ) {
  setScreen("screen17");
});
onEvent("c35", "click", function( ) {
  setScreen("screen18");
});
onEvent("c36", "click", function( ) {
  setScreen("screen19");
});
onEvent("c37", "click", function( ) {
  setScreen("screen20");
});
onEvent("c38", "click", function( ) {
  setScreen("screen21");
});
onEvent("c39", "click", function( ) {
  setScreen("screen22");
});
onEvent("c40", "click", function( ) {
  setScreen("screen23");
});
onEvent("back10", "click", function( ) {
  setScreen("screen7");
});
onEvent("back11", "click", function( ) {
  setScreen("screen7");
});
onEvent("back13", "click", function( ) {
  setScreen("screen7");
});
onEvent("back14", "click", function( ) {
  setScreen("screen7");
});
onEvent("back15", "click", function( ) {
  setScreen("screen7");
});
onEvent("back16", "click", function( ) {
  setScreen("screen7");
});
onEvent("back18", "click", function( ) {
  setScreen("screen7");
});
onEvent("back19", "click", function( ) {
  setScreen("screen7");
});
onEvent("back47", "click", function( ) {
  setScreen("screen8");
});
onEvent("back48", "click", function( ) {
  setScreen("screen8");
});
onEvent("back49", "click", function( ) {
  setScreen("screen8");
});
onEvent("back50", "click", function( ) {
  setScreen("screen8");
});
onEvent("back51", "click", function( ) {
  setScreen("screen8");
});
onEvent("back52", "click", function( ) {
  setScreen("screen8");
});
onEvent("back53", "click", function( ) {
  setScreen("screen8");
});
onEvent("back54", "click", function( ) {
  setScreen("screen8");
});
onEvent("back21", "click", function( ) {
  setScreen("screen24");
});
onEvent("back22", "click", function( ) {
  setScreen("screen24");
});
onEvent("back23", "click", function( ) {
  setScreen("screen24");
});
onEvent("back24", "click", function( ) {
  setScreen("screen24");
});
onEvent("back25", "click", function( ) {
  setScreen("screen24");
});
onEvent("back26", "click", function( ) {
  setScreen("screen24");
});
onEvent("back27", "click", function( ) {
  setScreen("screen24");
});
onEvent("back64", "click", function( ) {
  setScreen("screen24");
});
onEvent("back56", "click", function( ) {
  setScreen("screen25");
});
onEvent("back57", "click", function( ) {
  setScreen("screen25");
});
onEvent("back58", "click", function( ) {
  setScreen("screen25");
});
onEvent("back59", "click", function( ) {
  setScreen("screen25");
});
onEvent("back60", "click", function( ) {
  setScreen("screen25");
});
onEvent("back61", "click", function( ) {
  setScreen("screen25");
});
onEvent("back62", "click", function( ) {
  setScreen("screen25");
});
onEvent("back63", "click", function( ) {
  setScreen("screen25");
});
onEvent("back29", "click", function( ) {
  setScreen("screen42");
});
onEvent("back30", "click", function( ) {
  setScreen("screen42");
});
onEvent("back31", "click", function( ) {
  setScreen("screen42");
});
onEvent("back32", "click", function( ) {
  setScreen("screen42");
});
onEvent("back33", "click", function( ) {
  setScreen("screen42");
});
onEvent("back34", "click", function( ) {
  setScreen("screen42");
});
onEvent("back35", "click", function( ) {
  setScreen("screen42");
});
onEvent("back36", "click", function( ) {
  setScreen("screen42");
});
onEvent("back38", "click", function( ) {
  setScreen("screen43");
});
onEvent("back39", "click", function( ) {
  setScreen("screen43");
});
onEvent("back40", "click", function( ) {
  setScreen("screen43");
});
onEvent("back41", "click", function( ) {
  setScreen("screen43");
});
onEvent("back42", "click", function( ) {
  setScreen("screen43");
});
onEvent("back43", "click", function( ) {
  setScreen("screen43");
});
onEvent("back44", "click", function( ) {
  setScreen("screen43");
});
onEvent("back45", "click", function( ) {
  setScreen("screen43");
});
onEvent("buy1", "click", function( ) {
  setScreen("screen8");
});
onEvent("buy2", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy3", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy4", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy5", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy7", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy8", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy17", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy18", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy20", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy21", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy22", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy23", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy24", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy25", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy26", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy27", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy28", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy29", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy30", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy31", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy32", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy33", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy34", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy35", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy37", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy38", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy39", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy40", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy41", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy42", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy43", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy44", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy45", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy46", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy47", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy48", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy49", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy9", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy10", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy11", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy12", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy13", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy14", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy15", "click", function( ) {
  setScreen("screen60");
});
onEvent("buy16", "click", function( ) {
  setScreen("screen60");
});
onEvent("c9", "click", function( ) {
  setScreen("screen26");
});
onEvent("c10", "click", function( ) {
  setScreen("screen27");
});
onEvent("c11", "click", function( ) {
  setScreen("screen29");
});
onEvent("c12", "click", function( ) {
  setScreen("screen28");
});
onEvent("c13", "click", function( ) {
  setScreen("screen30");
});
onEvent("c14", "click", function( ) {
  setScreen("screen31");
});
onEvent("c15", "click", function( ) {
  setScreen("screen32");
});
onEvent("c16", "click", function( ) {
  setScreen("screen33");
});
onEvent("next3", "click", function( ) {
  setScreen("screen25");
});
onEvent("back55", "click", function( ) {
  setScreen("screen24");
});
onEvent("c41", "click", function( ) {
  setScreen("screen34");
});
onEvent("c42", "click", function( ) {
  setScreen("screen35");
});
onEvent("c43", "click", function( ) {
  setScreen("screen36");
});
onEvent("c44", "click", function( ) {
  setScreen("screen37");
});
onEvent("c45", "click", function( ) {
  setScreen("screen38");
});
onEvent("c46", "click", function( ) {
  setScreen("screen39");
});
onEvent("c47", "click", function( ) {
  setScreen("screen40");
});
onEvent("c48", "click", function( ) {
  setScreen("screen41");
});
onEvent("back28", "click", function( ) {
  setScreen("screen6");
});
onEvent("c17", "click", function( ) {
  setScreen("screen44");
});
onEvent("c18", "click", function( ) {
  setScreen("screen45");
});
onEvent("c19", "click", function( ) {
  setScreen("screen46");
});
onEvent("c20", "click", function( ) {
  setScreen("screen48");
});
onEvent("c21", "click", function( ) {
  setScreen("screen49");
});
onEvent("c22", "click", function( ) {
  setScreen("screen50");
});
onEvent("c23", "click", function( ) {
  setScreen("screen51");
});
onEvent("c24", "click", function( ) {
  setScreen("screen52");
});
onEvent("next2", "click", function( ) {
  setScreen("screen43");
});
onEvent("back2", "click", function( ) {
  setScreen("screen42");
});
onEvent("c25", "click", function( ) {
  setScreen("screen53");
});
onEvent("c26", "click", function( ) {
  setScreen("screen54");
});
onEvent("c27", "click", function( ) {
  setScreen("screen55");
});
onEvent("c28", "click", function( ) {
  setScreen("screen56");
});
onEvent("c29", "click", function( ) {
  setScreen("screen47");
});
onEvent("c30", "click", function( ) {
  setScreen("screen59");
});
onEvent("c31", "click", function( ) {
  setScreen("screen57");
});
onEvent("c32", "click", function( ) {
  setScreen("screen58");
});
onEvent("submit", "click", function( ) {
  createRecord("Detail", {Address:(getText("address")), PhoneNumber:(getText("pn"))}, function(record) {
    if (getText("address")) {
      if (getNumber("pn")) {
        setScreen("screen61");
      } else {
        setText("status2", "please enter address or phone number.");
        setTimeout(function() {
          setText("status2", "");
        }, 5000);
      }
    } else {
      setText("status2", "please enter address or phone number.");
      setTimeout(function() {
        setText("status2", "");
      }, 5000);
    }
  });
});
onEvent("back11", "click", function( ) {
  setScreen("screen6");
});
onEvent("back12", "click", function( ) {
  setScreen("screen6");
});
onEvent("Cancel", "click", function( ) {
  setScreen("screen2");
});
