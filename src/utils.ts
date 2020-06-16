import config from "../aws-exports";

export function getImageUrl(fileName: string): string {
  return `https://${config.aws_user_files_s3_bucket}.s3.amazonaws.com/${fileName}`;
}
