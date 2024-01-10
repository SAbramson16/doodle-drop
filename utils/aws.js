const { PutObjectCommand, S3Client } = require("@aws-sdk/client-s3")

const client = new S3Client({ region: 'us-east-1' });

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
