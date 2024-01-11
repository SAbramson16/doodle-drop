import aws from 'aws-sdk'


const region = "us-east-1"
const bucketName = "doodle-drop-images"
const accessKeyId = "AWS_ACCESS_KEY_ID"
const secretAccessKey = "AWS_SECRET_ACCESS_KEY"

const s3 = new s3 aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: '4'
})