const { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } = require("@aws-sdk/client-s3")
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const sharp = require('sharp');

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_DEFAULT_REGION;
const bucketName = process.env.AWS_BUCKET_NAME;

const client = new S3Client({
  credentials: { accessKeyId, secretAccessKey }, region
});

async function upload(fileName, fileBuffer, mimetype) {
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: fileName,
    Body: fileBuffer,
    ContentType: mimetype,
  });

  try {
    await client.send(command);
    return `https://${bucketName}.s3.amazonaws.com/${fileName}`;
  } catch (err) {
    console.error(err);
    throw(err);
  }
}

async function generateSignedUrl(fileName) {
  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: fileName,
  });
  return await getSignedUrl(client, command, { expiresIn: 60 });
}

async function deleteUpload(fileName) {
  const command = new DeleteObjectCommand({
    Bucket: bucketName,
    Key: post.imageName
  });
  await client.send(command);
}

module.exports = {
  s3Upload: upload,
  deleteFromS3: deleteUpload,
  generateS3Url: generateSignedUrl
};
