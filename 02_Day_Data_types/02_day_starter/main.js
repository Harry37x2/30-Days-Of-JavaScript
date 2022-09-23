// this is your main.js script
//ex 1
const challenge = '30 Days Of JavaScript'
console.log(challenge.length);
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3,7))
console.log(challenge.substring(3,21))
console.log(challenge.includes('Script'))
console.log(challenge.split(' '))
const gigants = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(gigants.split(','))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
const sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))
const withSpaces = ' 30 Days Of JavaScript '
console.log(withSpaces.trim(''))
const withStars = '*30 Days Of JavaScript*'
console.log(withStars.startsWith('*'))
console.log(withStars.endsWith('*'))
let pattern = /a/g
console.log(challenge.match(pattern))
let number = '30 '
console.log(number.concat('Days of ','JavaScript'));
console.log(challenge.repeat(2));

// ex 2
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

console.log(typeof '10')

let num = '9.8'
let numFloat = parseFloat(num)
console.log(Math.ceil(numFloat))

let isTrue = false
if('python'.includes('on') && 'jargon'.includes('on')){
    isTrue=true;
}else{isTrue=false}
console.log(isTrue)

console.log(Math.floor(Math.random()*100))
console.log(Math.abs(Math.floor((Math.random()*100)-50)))
console.log(Math.floor(Math.random()*255))

const js = 'JavaScript'
console.log(js.charAt(Math.floor(Math.random()*10)))

console.log('1 1 1 1 1\n2 1 2 4 8\n')

const bbb = 'You cannot end a sentence with because because because is a conjunction'
console.log(bbb.slice(31,54))

// ex 3
const love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern2 = /love/gi
console.log(love.match(pattern2))

const sentence2 = 'You cannot end a sentence with because because because is a conjunction'
let pattern3 = /because/gi
console.log(sentence2.match(pattern3))

const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
//let regex = /\W/g
console.log(sentence3.replace(/\%/g,'').replace(/\&/g,'').replace(/\$/g,'').replace(/\#/g,'').replace(/\@/g,'').replace(';',''))

const earing = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regEx1 = /\d+/g
let values = (earing.match(regEx1));
let a = parseFloat(values[0])
let b = parseFloat(values[1])
let c = parseFloat(values[2])
console.log(final = a*12+b+c*12)
