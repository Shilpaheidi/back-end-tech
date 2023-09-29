import { ApiProperty } from "@nestjs/swagger";

export class TicketsInfo  {
  
    @ApiProperty()
    id: number;
    @ApiProperty()

    title: string;
    @ApiProperty()
    status: string;
    @ApiProperty()
    description: string;
 
 
}