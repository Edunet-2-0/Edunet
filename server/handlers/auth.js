const db = require('../database/db');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');

exports.signUp = async(req, res, next) => {
  console.log('Received register REQ !!!')
  try{
    console.log('adding new user', req.body);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    if(req.body.role === 'Teacher'){
      //var university = await db.University.findOrCreate({name : req.body.university});
      var teacher = await db.Teacher.create({
        first_name : req.body.first,
        last_name : req.body.last,
        email: req.body.email,
        password : hashedPassword,
        github : req.body.github,
        linkedIn : req.body.linkedIn,
        photo : req.body.photo || "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png",
        post: req.body.post,
        // universityId : university.id
      });
      const {id, email} = teacher;
      //const universityName = university.name;
      const token = jwt.sign({id, email}, process.env.SECRET);
      res.status(201).json({id, email, token})
    } else if(req.body.role === 'Student') {
      console.log('adding new student', req.body);
      var student = await db.Student.create({
        first_name : req.body.firstName,
        last_name : req.body.lastName,
        email: req.body.email,
        password : hashedPassword,
        photo : req.body.photo || "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
      });
      const {id, email} = await student.save();
      console.log('New student created !', {id, email})
      console.log(process.env.SECRET)
      const token = jwt.sign({id, email}, 'ThisisSecretKeys');
      console.log('New token generated')
      res.status(201).json({id, email, token})
    } else {
      console.log('Oops')
    }
  }
  catch(e)
  {
    if(e.name === 'SequelizeUniqueConstraintError' ){
      res.send('An account with this email already exists')
    }
  }
};

exports.login = async(req, res, next) => {
  console.log('Received login REQ !!')
  try{
    const role = (req.body.role === 'Teacher')? 'Teacher' : 'Student';
    const user = await db[role].findOne({where:{email : req.body.email}});
    if(!user){
      res.send('user not found');
      console.log('user not found yehelkek zemzmi')
    }
    else{
      console.log('User found in DB : ', user)
      const valid = await bcrypt.compare(req.body.password, user.password);
      if(!valid){
        console.log('password not valid')
        res.status(404).send('not valid password');
      }
      else{
        console.log('password VALID')
        const {id, email} = user;
        /*  const university = await db.University.findOne({where:{id : user.universityId }});
        const universityName = university.name;*/
        const token = jwt.sign({id, email}, 'ThisisSecretKeys');
        res.status(200).json({id, email, token})
      }
    }
    
  }
  catch(e){
    console.log(e)
    // res.send('failed to login due to',e.name)
  }
};