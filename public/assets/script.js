 
 angular.module('torrent-web-poc').config(function($mdThemingProvider) {
 	$mdThemingProvider.theme('default')
-		.primaryPalette('pink')
-		.accentPalette('orange')
-		.dark();
+		.primaryPalette('deep-orange')
+		.accentPalette('orange');
 });
 
 angular.module('torrent-web-poc').controller('main', function($scope, $mdToast) {
@@ -16,7 +15,7 @@ angular.module('torrent-web-poc').controller('main', function($scope, $mdToast)
 		url: '',
 		torrent: null,
 		submitting: null,
-		bgColor: 'white'
+		bgColor: '#f5f5f5'
 	};
 
 	checkHash();
@@ -56,9 +55,9 @@ angular.module('torrent-web-poc').controller('main', function($scope, $mdToast)
 	$scope.getBgColorStyle = function() {
 		var color;
 		switch($scope.currentPage()) {
-			case 'add-page': color = '#212121'; break;
-			case 'loading-page': color = '#212121'; break;
-			case 'torrents-page': color = '#455A64'; break;
+			case 'add-page': color = '#f5f5f5'; break;
+			case 'loading-page': color = '#f5f5f5'; break;
+			case 'torrents-page': color = '#f5f5f5'; break;
 		}
 		return {'background-color': color};
 	};
@@ -103,4 +102,4 @@ function byteSize(bytes, precision) {
 	} else {
 		return bytes + " B";
 	}
-}
+}
32 public/assets/style.css
