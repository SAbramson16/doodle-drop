const { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } = require("@aws-sdk/client-s3")
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const sharp = require('sharp');

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_DEFAULT_REGION;
const bucketName = process.env.AWS_BUCKET_NAME;

const RESIZE_OPTIONS = { height: 1920, width: 1080, fit: 'contain' };

const randomImageName = (bytes =32) => crypto.randomBytes(bytes).toString('hex');

const client = new S3Client({
  credentials: { accessKeyId, secretAccessKey }, region
});

async function upload(fileBuffer, mimetype) {
  const buffer = await sharp(fileBuffer).resize(RESIZE_OPTIONS).toBuffer();
  const imageName = randomImageName();

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: imageName,
    Body: buffer,
    ContentType: mimetype,
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
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
