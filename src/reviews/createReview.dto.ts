import { IsInt, IsNotEmpty, IsString, IsPositive, IsDate, Min, Max } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsPositive()
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsInt()
  userId: number;

  @IsInt()
  bookId: number;
  
  @IsNotEmpty() 
  @IsDate()     
  reviewDate: Date
}