export class CreateProjectDto {
  name: string;
  description: string;
  image_data: {
    alt_text: string;
    src_path: string;
  }[];
  created_at: Date;
  updated_at: Date;
}
