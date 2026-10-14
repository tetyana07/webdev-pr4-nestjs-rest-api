import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { CreateGadgetDto } from "./dto/create-gadget.dto";
import { UpdateGadgetDto } from "./dto/update-gadget.dto";
import { GadgetsService } from "./gadgets.service";

@Controller("gadgets")
export class GadgetsController {
  constructor(private readonly gadgetsService: GadgetsService) {}

  @Get()
  @Header("X-API-Version", "1.0")
  @Header("X-Service-Status", "operational")
  findAll(@Query("search") search?: string, @Query("limit") limit?: string) {
    return this.gadgetsService.findAll(search, limit);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.gadgetsService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createDto: CreateGadgetDto) {
    return this.gadgetsService.create(createDto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDto: UpdateGadgetDto) {
    return this.gadgetsService.update(id, updateDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("id") id: string) {
    this.gadgetsService.remove(id);
  }
}