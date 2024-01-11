const { PutObjectCommand, S3Client } = require("@aws-sdk/client-s3")

const randomImageName = (bytes =32) => crypto.randomBytes(bytes).toString('hex')

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_DEFAULT_REGION;
const bucketName = process.env.AWS_BUCKET_NAME;

const client = new S3Client({
  credentials: { accessKeyId, secretAccessKey }, region
});

const main = async () => {
  const command = new PutObjectCommand({
    Bucket: "test-bucket-doodle-drop",
    Key: "hello-doodle-drop.txt",
    Body: "Hello!",
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

module.exports = main;
