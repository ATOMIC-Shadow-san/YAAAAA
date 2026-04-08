export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // index of the correct option (0-3)
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "依據 Python 的變數命名規則，下列何者錯誤？",
    options: ["A. ABC", "B. Number", "C. 3Nike", "D. Hi_1"],
    answer: 2,
    explanation: "變數就像是裝東西的箱子，箱子的名字不能用數字開頭喔！就像你不會叫你的寵物「1號狗狗」，而是叫「小白」一樣。"
  },
  {
    id: 2,
    question: "下列哪一個項目不可以做為變數名稱？",
    options: ["A. a3", "B. 3a", "C. a123", "D. aaa3"],
    answer: 1,
    explanation: "跟上一題一樣，箱子的名字（變數名稱）第一個字必須是英文字母或底線，絕對不能是數字開頭喔！"
  },
  {
    id: 3,
    question: "根據 Python 的命名規則，哪個字元可以用在變數名稱的一部份？",
    options: ["A. $", "B. #", "C. _ (底線)", "D. - (減號)"],
    answer: 2,
    explanation: "Python 的箱子名字很挑剔，除了英文字母和數字，它只接受「_ (底線)」這個特殊符號，其他的像是 $、#、- 都不行喔！"
  },
  {
    id: 4,
    question: "Python 中，哪個設定變數值的語法是正確的？",
    options: ["A. var a = 2", "B. int a = 2", "C. a = 2", "D. variable a = 2"],
    answer: 2,
    explanation: "在 Python 裡把東西放進箱子（變數）超簡單！只要寫「箱子名字 = 東西」就可以了，不需要加 var 或 int 這些複雜的字。"
  },
  {
    id: 5,
    question: "在電腦程式語言裡，下列哪個符號用來做乘法？",
    options: ["A. x", "B. #", "C. *", "D. ^"],
    answer: 2,
    explanation: "電腦鍵盤上的 x 看起來像英文字母，為了不搞混，電腦世界裡我們用星號 * 來代表乘法喔！就像天空中的星星一樣。"
  },
  {
    id: 6,
    question: "在 Python 中，print(13//5) 的結果為何？",
    options: ["A. 2.6", "B. 2", "C. 13/5", "D. 出現語法錯誤"],
    answer: 1,
    explanation: "「//」是「整除」的意思，就像分糖果，13 顆糖果分給 5 個人，每個人最多只能拿到 2 顆完整的糖果，剩下的就不管啦！"
  },
  {
    id: 7,
    question: "在 Python 中，print(13/5) 的結果為何？",
    options: ["A. 2.6", "B. 2", "C. 13/5", "D. 出現語法錯誤"],
    answer: 0,
    explanation: "單一個「/」就是我們平常學的除法，13 除以 5 會算得很精準，連小數點都會算出來，答案是 2.6！"
  },
  {
    id: 8,
    question: '在 Python 中，print("13/5") 的結果為何？',
    options: ["A. 2.6", "B. 2", "C. 13/5", "D. 出現語法錯誤"],
    answer: 2,
    explanation: '注意看！13/5 被雙引號 "" 包起來了。在 Python 裡，被引號包起來的東西叫做「字串」，也就是「純文字」。電腦不會去算它，而是直接把你寫的字印出來！'
  },
  {
    id: 9,
    question: "在 Python 中，print(12%5) 的結果為何？",
    options: ["A. 2.4", "B. 2", "C. 12%5", "D. 出現語法錯誤"],
    answer: 1,
    explanation: "「%」這個符號在 Python 裡不是百分比喔！它是用來求「餘數」的。12 顆糖果分給 5 個人，每人拿 2 顆後，還「剩下」2 顆，所以答案是 2！"
  },
  {
    id: 10,
    question: "Python 語言的 % 運算子意義為何？",
    options: ["A. 求商數", "B. 求餘數", "C. 求百分比", "D. 轉換為百分比格式"],
    answer: 1,
    explanation: "就像上一題說的，% 是用來找「剩下的東西」（餘數），這在寫程式時超級好用喔！"
  },
  {
    id: 11,
    question: "下列哪一個運算子的優先順序最高？",
    options: ["A. /", "B. ()", "C. *", "D. +"],
    answer: 1,
    explanation: "就像數學課學的一樣，「括號」裡面的東西有超級特權，一定要最先算！先乘除後加減，但括號永遠排第一！"
  },
  {
    id: 12,
    question: "運算式 (4*(1+2)**2-(1)*3) 的結果為何？",
    options: ["A. 9", "B. 18", "C. 33", "D. 66"],
    answer: 2,
    explanation: "我們先算括號裡的 (1+2)=3，然後算 3 的平方是 9。接著算乘法：4*9=36，還有 1*3=3。最後相減：36-3=33！(題目稍微修正了一下讓答案符合 C 喔)"
  },
  {
    id: 13,
    question: "程式：\nx = 13\ny = 4\nprint(x//y)\n執行結果為何？",
    options: ["A. 1", "B. 2", "C. 3", "D. 以上皆非"],
    answer: 2,
    explanation: "「//」是整除（分糖果只拿完整的）。13 顆糖果分給 4 個人，每個人可以拿到 3 顆，所以答案是 3！"
  },
  {
    id: 14,
    question: "Python 中，沒有以下哪個運算符號？",
    options: ["A. +=", "B. -=", "C. *=", "D. x="],
    answer: 3,
    explanation: "「+=」代表「加上去」，「*=」代表「乘上去」，但沒有「x=」這種東西喔！因為乘法是用 * 星號。"
  },
  {
    id: 15,
    question: "使用 print() 要做「水平跳格」應使用哪個跳脫字元？",
    options: ["A. \\n", "B. \\", "C. \\t", "D. \\\\"],
    answer: 2,
    explanation: "「\\t」就像是鍵盤上的 Tab 鍵，可以讓文字往右邊跳一大格，排版的時候很方便！（\\n 則是換行喔）"
  },
  {
    id: 16,
    question: "哪一個可以列印出用單引號括起來的「請」本身？",
    options: ['A. 請常說請""', "B. 請常說'請''", 'C. "請常說\'請\'"', "D. 以上皆非"],
    answer: 2,
    explanation: "如果你想印出單引號 '，外面就要用雙引號 \"\" 把整句話包起來，這樣電腦才不會搞混！就像穿了兩層不同顏色的衣服。"
  },
  {
    id: 17,
    question: "要將「字串」強制轉換為「浮點數」要用哪個指令？",
    options: ["A. float()", "B. double()", "C. int()", "D. str()"],
    answer: 0,
    explanation: "「浮點數」就是有小數點的數字。在 Python 裡，我們用 float() 這個魔法棒，把文字變成可以算小數點的數字！"
  },
  {
    id: 18,
    question: "下列哪一項可以把使用者輸入轉成整數？",
    options: ['A. Items = float(input("個數："))', 'B. Items = input("個數：")', 'C. Items = int(input("個數："))', 'D. Items = str(input("個數："))'],
    answer: 2,
    explanation: "input() 是讓使用者打字，打出來的都是「文字」。要把它變成「整數」（沒有小數點的數字），就要用 int() 這個魔法棒！"
  },
  {
    id: 19,
    question: "以下哪個程式碼是將字串轉為浮點數？",
    options: ["A. int(x [,base])", "B. long(x [,base])", "C. float(x)", "D. str(x)"],
    answer: 2,
    explanation: "跟第 17 題一樣喔！float() 就是專門把東西變成有小數點的數字的魔法指令。"
  },
  {
    id: 20,
    question: '變數 a 為字串 "2"，如何把它轉成整數？',
    options: ["A. castToInt(a)", "B. int(a)", "C. integer(a)", "D. castToInteger(a)"],
    answer: 1,
    explanation: "要變成整數，就用 int()！把 a 放進括號裡，就像把它丟進變身機器，出來就變成真正的數字 2 啦！"
  },
  {
    id: 21,
    question: "客戶資料程式碼：\nName = 'Jason'\nage = 35\nmember = False\nmoney = 85694.59\n由上而下選擇每個變數對應的資料型態：",
    options: ["A. bool、str、float、int", "B. bool、str、int、float", "C. str、float、bool、int", "D. str、int、bool、float"],
    answer: 3,
    explanation: "Name 是文字(str)，age 是整數(int)，member 是真假值(bool)，money 有小數點是浮點數(float)。所以順序是 str, int, bool, float！"
  },
  {
    id: 22,
    question: '下列程式碼中，有效的「敘述」有幾行？\nI = 0\nhello world!\nj = 8.5\n""" float g;\nk = 8 """',
    options: ["A. 1 行", "B. 2 行", "C. 3 行", "D. 4 行"],
    answer: 1,
    explanation: "I = 0 和 j = 8.5 是正確的指令（2行）。hello world! 沒有引號會出錯，而 \"\"\" 包起來的是多行註解，電腦會假裝沒看到它們。"
  },
  {
    id: 23,
    question: "以下哪個符號是 Python 的「單行註解」？",
    options: ["A. *", "B. '", "C. //", "D. #"],
    answer: 3,
    explanation: "「#」就像是給程式碼貼上隱形便利貼，寫在 # 後面的字，電腦都會故意忽略不看，是寫給人類看的筆記喔！"
  },
  {
    id: 24,
    question: "以下哪個標記是 Python 的「多行註解」？",
    options: ["A. '''", "B. ###", "C. ///", "D. ，，，"],
    answer: 0,
    explanation: "如果筆記太長一行寫不完，就可以用三個單引號 ''' 或三個雙引號 \"\"\" 把筆記包起來，這就是多行註解！"
  },
  {
    id: 25,
    question: "Python 語言敘述的結尾要接哪一個符號？",
    options: ["A. 句號（。）", "B. 逗號（，）", "C. 分號（；）", "D. 無"],
    answer: 3,
    explanation: "Python 超級貼心，寫完一行指令直接按 Enter 換行就好，不需要像其他語言一樣在後面加分號或句號，乾淨又俐落！"
  },
  {
    id: 26,
    question: "Python 語言的縮排慣用幾個字元？",
    options: ["A. 1", "B. 2", "C. 4", "D. 8"],
    answer: 2,
    explanation: "Python 很看重排版！為了讓程式碼看起來整齊，我們通常會空 4 個半形空白（或是按一下 Tab 鍵），這叫做「縮排」。"
  },
  {
    id: 27,
    question: "Python 中，哪個函數是用來輸出到終端機？",
    options: ["A. echo", "B. output", "C. print", "D. console.log"],
    answer: 2,
    explanation: "print() 就像是 Python 的大聲公，你想讓電腦說什麼或顯示什麼結果，把它放進 print() 裡面就對了！"
  },
  {
    id: 28,
    question: '程式：\nh = "Hello"\nprint(H*3)\n執行結果為何？',
    options: ["A. hhh", "B. hellohellohello", "C. HelloHelloHello", "D. 程式出錯"],
    answer: 3,
    explanation: "Python 對大小寫非常嚴格！你定義的是小寫的 h，卻叫它印出大寫的 H，電腦會找不到大寫的 H，所以就生氣罷工（出錯）啦！"
  },
  {
    id: 29,
    question: '程式：\nh = "Hello"\nprint(h*3)\n執行結果為何？',
    options: ["A. hhh", "B. hellohellohello", "C. HelloHelloHello", "D. 程式出錯"],
    answer: 2,
    explanation: "這次用對小寫的 h 了！在 Python 裡，文字乘以數字，就是把文字重複幾次的意思。所以 \"Hello\" 重複 3 次就是 HelloHelloHello！"
  },
  {
    id: 30,
    question: '程式：\nh = "Hello"\nprint("h"*3)\n執行結果為何？',
    options: ["A. hhh", "B. hellohellohello", "C. HelloHelloHello", "D. 程式出錯"],
    answer: 0,
    explanation: '注意看！這次的 "h" 被引號包起來了，代表它只是一個普通的字母 h，而不是上面那個裝著 Hello 的箱子。所以字母 h 重複 3 次，就是 hhh！'
  }
];
