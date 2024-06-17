import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
// import { Projects } from './interfaces/project.interface';

@Injectable()
export class ProjectsService {
  private readonly projects: CreateProjectDto[] = [];

  create(createProjectDto: CreateProjectDto) {
    this.projects.push(createProjectDto);
  }

  findAll(): CreateProjectDto[] {
    return this.projects;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
