import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { StarService } from '../../services/star.service';

@Component({
  selector: 'star-review',
  templateUrl: './star-review.component.html',
  styleUrls: ['./star-review.component.scss']
})
export class StarReviewComponent implements OnInit {

	@Input() userId;
	@Input() productId;

	stars: Observable<any>;
	avgRating: Observable<any>;

	ctrl = new FormControl(null, Validators.required);

  constructor(private starService: StarService) { }

  ngOnInit() {
  	this.stars = this.starService.getProductStars(this.productId);

  	this.avgRating = this.stars.pipe(map(arr => {
  		const ratings = arr.map(v => v.value)
  		return ratings.length ? ratings.reduce((total, val) => total + val) / arr.length : 'not reviewed'
  	}))
  }

  starHandler(value) {
  	this.starService.setStar(this.userId, this.productId, value);
  }

}
