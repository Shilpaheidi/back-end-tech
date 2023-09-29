import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class Users  {
    // @IsNotEmpty()
    @ApiProperty()
    reg_no: string;
    @ApiProperty()
    @IsNotEmpty()
    f_name: string;
    @ApiProperty()
    @IsNotEmpty()
    email_id: string;
    @ApiProperty()
    @IsNotEmpty()
    dept: string;
    @ApiProperty()
    @IsNotEmpty()
    mobile_no:string;
    @ApiProperty()
    @IsNotEmpty()
    staff_student:string;
    @ApiProperty()
    @IsNotEmpty()
    address:string;
  }
  