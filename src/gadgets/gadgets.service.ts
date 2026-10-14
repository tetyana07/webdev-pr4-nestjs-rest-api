import { Injectable, NotFoundException } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CreateGadgetDto } from "./dto/create-gadget.dto";
import { UpdateGadgetDto } from "./dto/update-gadget.dto";

export interface Gadget {
  id: string;
  title: string;
  price: number;
  warrantyMonths: number;
  cpu: string;
  ramGb: number;
}

@Injectable()
export class GadgetsService {
  private items: Gadget[] = [
    { id: "1", title: "Ноутбук Pro 16", price: 45000, warrantyMonths: 24, cpu: "M3 Max", ramGb: 36 },
    { id: "2", title: "Смартфон X", price: 25000, warrantyMonths: 12, cpu: "A17", ramGb: 8 },
    { id: "3", title: "Планшет Air", price: 18000, warrantyMonths: 12, cpu: "M2", ramGb: 8 },
  ];

   findAll(search?: string, limit?: string): Gadget[] {
    let result = this.items;

    if (search) {
      const s = search.toLowerCase();
      result = result.filter((g) => g.title.toLowerCase().includes(s));
    }

    const n = Number(limit);
    if (limit && Number.isInteger(n) && n > 0) {
      result = result.slice(0, n);
    }

    return result;
  }

  findOne(id: string): Gadget {
    const item = this.items.find((g) => g.id === id);
    if (!item) {
      throw new NotFoundException(`Сутність з ID ${id} не знайдена`);
    }
    return item;
  }

  create(dto: CreateGadgetDto): Gadget {
    const item: Gadget = { id: randomUUID(), ...dto };
    this.items.push(item);
    return item;
  }

  update(id: string, dto: UpdateGadgetDto): Gadget {
    const item = this.findOne(id);
    Object.assign(item, dto);
    return item;
  }

  remove(id: string): void {
    const item = this.findOne(id);
    this.items = this.items.filter((g) => g.id !== item.id);
  }
}