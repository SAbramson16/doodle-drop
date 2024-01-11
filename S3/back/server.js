import express from 'express';
import multer from 'multer';
import crypto from 'crypto';
import sharp from 'sharp';
// import { PrismaClient } from'@prisma/client'

import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const client = new S3Client(clientParams);
const command = new GetObjectCommand(getObjectParams);
const url = await getSignedUrl(client, command, { expiresIn: 3600 });

import dotenv from 'dotenv'

dotenv.config()

const randomImageName = (bytes =32) => crypto.randomBytes(bytes).toString('hex')

const accessKey = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
const bucketRegion = process.env.AWS_DEFAULT_REGION
const bucketName = process.env.AWS_BUCKET_NAME

const s3 = new s3 aws.S3({
  credentials: {
    accessKeyid: accessKey,
    secretAccessKey: secretAccessKey,
  },



const app = express()
// const prisma = PrismaClient()

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


app.get("/api/posts", async (req, res) => {
  const post = await prisma.post.findMany({ orderBy: [{created: 'desc'}]})

  for (const post of posts) {}
  const getObjectParams = {
    Bucket: bucketName,
    Key: post.imageName,
  }
  const command = new GetObjectCommand(getObjectParams);
  const url = await getSignedUrl(s3, command, { expiresIn: 60 });
  post.imageUrl = url
}


res.send(posts)

app.post('/api/posts', upload.single('image'), async (req, res) => {
  console.log("req.body", req.body)
  console.log("req.file", req.file)
  
 const buffer = await sharp(req.file.buffer).resize({height: 1920, 1080, fit "contain"}).toBuffer()
  
 const imageName = randomImageName()
  const params = {
    Bucket: bucketName,
    Key: req.file.originalNmae,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  }

  const command = new PutObjectCommand(params)
  await s3.send(command)

  const post = await prisma.posts.create({
    data: {
      caption: req.body.caption,
      imageNmae: imageName
    }
  })


  res.send(post)
})

app.delete("/api/posts/:id", async (req, res) => {
  const id = +req.params.id

  const post = await prisma.post.findUnique({where: {id}})
  if (!post) {
    res.status(404).send("Post not found")
    return
  }
  
  const params = {
  Bucket: bucketName,
  Key: post.imageName
  }
  const command = new DeleteObjectCommand(params)
  await s3.send(command)

  await prisma.posts.delete({where: {id}})
  
  
  res.send(post)
})
//app.use(express.static('front'))

//app.get('s3URL', (req, res) => {


app.listen(8080, () = console.log("listening on port 8080"))

//install multer