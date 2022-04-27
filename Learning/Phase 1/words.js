class Add {
    constructor(...words) {
        this.words = words;
    }
    print(){
        for (let i = 0; i < this.words.length; i++) {
            var my_sentence = ("$" + this.words[i]);
            for (let j = 0; j < my_sentence.length; j++)
            {
                var ans;
                ans = ans + my_sentence[j];
            }
        }
        var x = ans + "$"
        console.log(x.slice(9))
    }
    //your code goes here
  }

  var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
  var y = new Add("this", "is", "awesome");
  var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
  x.print();
  y.print();
  z.print();