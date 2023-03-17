import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{


  displayedColumns: string[] = ['position', 'name' , 'image'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  pokemons = [];



  constructor(private servicePokemon: PokemonService, private router: Router){
  }


  ngOnInit(): void {
    this.getAllPokemons();
  }



  getAllPokemons() {
    let pokemonData;

    for (let i = 1; i <= 151; i++) {
      this.servicePokemon.getPokemons(i).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name
          };

          this.data.push(pokemonData);
          this.dataSource = new MatTableDataSource<any>(this.data);
          this.dataSource.paginator = this.paginator;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  getPokemonByFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getRow(row:any){
    console.log(row);
    this.router.navigateByUrl(`/pokeDetail/${row.position}`)
  }

  goToBattle(row:any){
    this.router.navigateByUrl(`/battle`)
  }
}
